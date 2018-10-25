from flask import Flask, render_template, request, abort, jsonify
from tinydb import TinyDB, Query
from google.oauth2 import id_token
from google.auth.transport import requests

app = Flask(__name__, static_folder="../Static/dist", template_folder="../Static")
db = TinyDB('db.json')

CLIENT_ID = "381930517371-emjlrrknknbbj3u0jm50h24l9tdjkipj.apps.googleusercontent.com"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/AuthenticateUser", methods=["POST"])
def AuthenticateUser():
    if not request.json or not "id_token" in request.json:
        abort(400)
    
    try:
        token = request.json.get("id_token")
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)

        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError('Wrong issuer.')
        
        userid = idinfo['sub']

    except ValueError:
        abort(403)


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
