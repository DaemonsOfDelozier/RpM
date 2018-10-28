from flask import Flask, render_template, request, abort, jsonify
from tinydb import TinyDB, Query
from google.oauth2 import id_token
from google.auth.transport import requests
from flask_login import LoginManager
from Models.User import User

app = Flask(__name__, static_folder="../Static/dist", template_folder="../Static")
db = TinyDB('db.json')
login_manager = LoginManager()
login_manager.init_app(app)

CLIENT_ID = "381930517371-emjlrrknknbbj3u0jm50h24l9tdjkipj.apps.googleusercontent.com"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/AuthenticateUser", methods=["POST"])
def AuthenticateUser():

    if not request.json or not "tokenObj" in request.json or not "profileObj" in request.json:
        abort(400)
    
    try:
        json = request.get_json()
        token = json['tokenObj']

        idinfo = id_token.verify_oauth2_token(token['id_token'], requests.Request(), CLIENT_ID)

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

        return "success"

    except ValueError:
        abort(403)

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
