from flask_login import UserMixin

class User(UserMixin):
    def __init__(self, userID, name, email):
        self.id = userID
        self.name = name
        self.email = email

    def getDatabaseModel(self):
        return {'id': self.id,
                'name': self.name,
                'email': self.email
                }
