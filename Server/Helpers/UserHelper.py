from Models.User import User
from tinydb import TinyDB, Query

def findUser(id, db):
    dbUser = db.table("Users").get(Query().id == id)
    if dbUser is not None:
        return User(dbUser['id'], dbUser['name'], dbUser['email'])
    else:
        return None