from Helpers.UserHelper import findUser

class Post(object):
    def __init__(self, postID, userID, title, description, notes, rating, numRatings, start, waypoints, end):
        self.id = postID
        self.userid = userID
        self.title = title
        self.description = description
        self.notes = notes
        self.rating = rating
        self.numRatings = numRatings
        self.start = start
        self.waypoints = waypoints
        self.end = end

    def getResponseDict(self, db):
        return {
            'post': self.getDatabaseModel(),
            'poster': findUser(self.userid, db).getDatabaseModel()
        }
    
    def getDatabaseModel(self):
        return {'id': self.id,
                'userid': self.userid,
                'title': self.title,
                'description': self.description,
                'notes': self.notes,
                'rating': self.rating,
                'numRatings': self.numRatings,
                'start': self.start,
                'waypoints': self.waypoints,
                'end': self.end
                }