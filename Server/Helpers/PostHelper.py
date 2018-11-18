from Models.Post import Post

def mapDictToPost(dictionary):
    return Post(postID=dictionary['id'],
                userID=dictionary['userid'],
                title=dictionary['title'],
                description=dictionary['description'],
                notes=dictionary['notes'],
                rating=dictionary['rating'],
                numRatings=dictionary['numRatings'],
                start=dictionary['start'],
                waypoints=dictionary['waypoints'],
                end=dictionary['end'])