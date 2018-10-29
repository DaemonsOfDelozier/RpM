from flask import Flask, render_template, request, abort, jsonify
from tinydb import TinyDB, Query
import json

app = Flask(__name__, static_folder="../Static/dist", template_folder="../Static")
db = TinyDB('db.json')

@app.route("/")
def index():
    posts = db.table("Posts")
    posts = json.dumps(posts.all())
    return render_template("index.html", posts=posts)

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
