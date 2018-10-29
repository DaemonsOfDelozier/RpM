from flask import Flask, render_template, request, abort, jsonify, redirect, url_for
from tinydb import TinyDB, Query
from google.oauth2 import id_token
from google.auth.transport import requests
from flask_login import LoginManager, login_user, logout_user, current_user
from Models.User import User
import os

app = Flask(__name__, static_folder="../Static/dist", template_folder="../Static", instance_relative_config=True)

app.config.from_object("config")
app.config.from_pyfile("instance_config.py")

db = TinyDB('db.json')
login_manager = LoginManager()
login_manager.init_app(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/Login", methods=["POST"])
def Login():
    if not request.json or not "tokenObj" in request.json or not "profileObj" in request.json:
        abort(400)
    
    try:
        json = request.get_json()
        token = json['tokenObj']

        idinfo = id_token.verify_oauth2_token(token['id_token'], requests.Request(), app.config['CLIENT_ID'])

        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError('Wrong issuer.')
        
        userid = idinfo['sub']

        userTable = db.table("Users")
        dbUser = userTable.get(Query().id == userid)

        if dbUser == None:
            profile = json['profileObj']
            dbUser = { 'id': userid, 'name': profile['name'], 'email': profile['email'] }
            userTable.insert(dbUser)
        
        user = User(dbUser['id'], dbUser['name'], dbUser['email'])

        login_user(user, remember=True)
        return redirect(url_for("index"))

    except ValueError:
        abort(403)

@app.route("/Logout", methods=["POST"])
def Logout():
    logout_user()
    return redirect(url_for("index"))

@login_manager.user_loader
def load_user(user_id):
    dbUser = db.table("Users").get(Query().id == user_id)
    return User(dbUser['id'], dbUser['name'], dbUser['email'])

@app.route("/GetAllPosts")
def GetAllPosts():
    posts = db.table("Posts")
    return jsonify(posts.all())

@app.route("/SubmitPost", methods=["POST"])
def SubmitPost():
    if not request.json or not "post" in request.json:
        abort(400)

    newPost = {'notes': request.json.get("post")}
    db.table("Posts").insert(newPost)
    return "success"

if __name__ == "__main__":
    app.run()
