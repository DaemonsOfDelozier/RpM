import os

SECRET_KEY = os.environ.get("SECRET_KEY", default=None)
if not SECRET_KEY:
    raise ValueError("No secret key set for Flask application")

CLIENT_ID = os.environ.get("CLIENT_ID", default=None)
if not CLIENT_ID:
    raise ValueError("No client id set for Flask application")