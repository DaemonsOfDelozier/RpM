from flask import Flask, render_template, request, abort, jsonify, redirect, url_for
from tinydb import TinyDB, Query
from google.oauth2 import id_token
from google.auth.transport import requests
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from Models.User import User
from Models.Post import Post
from Helpers import UserHelper, PostHelper
import json
import uuid

app = Flask(__name__, static_folder="../Static/dist", template_folder="../Templates", instance_relative_config=True)

app.config.from_object("config")

try:
    app.config.from_pyfile("instance_config.py")
except FileNotFoundError:
    pass


db = TinyDB(app.config['DATABASE_PATH'])
login_manager = LoginManager()
login_manager.init_app(app)

@app.route("/")
def index():
    return render_template("index.html", client_id=app.config["CLIENT_ID"])

@app.route("/Login/", methods=["POST"])
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
        return render_template("index.html", client_id=app.config["CLIENT_ID"])

    except ValueError:
        abort(403)

@app.route("/Logout/", methods=["POST"])
def Logout():
    logout_user()
    return render_template("index.html", client_id=app.config["CLIENT_ID"])

@login_manager.user_loader
def loadUser(userid):
    return UserHelper.findUser(userid, db)

@app.route("/GetAllPosts/")
def GetAllPosts():
    posts = db.table("Posts").all()

    posts = posts[::-1]

    attachPoster = lambda postDict: PostHelper.mapDictToPost(postDict).getResponseDict(db)
    postsWithUsers = list(map(attachPoster, posts))

    return jsonify(postsWithUsers)

@app.route("/SubmitPost/", methods=["POST"])
@login_required
def SubmitPost():

    title = request.form['title']
    description = request.form['description']
    notes = request.form['notes']
    rating = request.form['rating']
    start = request.form['start']
    waypoints = request.form['waypoints']
    end = request.form['end']

    rating = int(rating)
    waypoints = [x.strip() for x in waypoints.split('>')]
    waypoints_json = {}
    new_waypoints = []

    i = 0
    while(i < len(waypoints)):
        #checking to see if left blank
        if(waypoints[i] == ''):
            waypoints_json['location'] = start
            waypoints_json['stopover'] = True
        else:
            waypoints_json['location'] = waypoints[i]
            waypoints_json['stopover'] = True
        new_waypoints.append(waypoints_json)
        waypoints_json = {}
        i = i + 1

    # if not request.json:
    #     abort(400)

    # json = request.get_json()

    newPost = Post(postID=uuid.uuid4().hex,
                   userID=current_user.id,
                   title=title,
                   description=description,
                   notes=notes,
                   rating=rating,
                   numRatings=0,
                   start=start,
                   waypoints=new_waypoints,
                   end=end)

    db.table("Posts").insert(newPost.getDatabaseModel())
    return "success"

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html", client_id=app.config["CLIENT_ID"])

if __name__ == "__main__":
    app.run()
