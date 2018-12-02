from flask_login import UserMixin

class User(UserMixin):
    def __init__(self, userID, name, email, bio="", vehicle=""):
        self.id = userID
        self.name = name
        self.email = email
        self.bio = bio
        self.vehicle = vehicle

    def getDatabaseModel(self):
        return {'id': self.id,
                'name': self.name,
                'email': self.email,
                'bio': self.bio,
                'vehicle': self.vehicle
                }
