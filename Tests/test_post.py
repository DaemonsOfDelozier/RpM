#testing post component
import sys
sys.path.insert(0, "../Server/Models")
import Post

def test_post_1():
    post1 = Post.Post("96822060868999399931", 
                     "50583170224718302358", 
                     "Test Post 1", 
                     "This is a description for test post 1.", 
                     "These are notes for test post 1.", 
                     3, 
                     12, 
                     "Kent, OH", 
                     "[{\"location\": \"Toledo, OH\", \"stopover\": true}]",
                     "Columbus, OH")
    assert post1.id == "96822060868999399931"
    assert post1.userid == "50583170224718302358"
    assert post1.title == "Test Post 1"
    assert post1.description == "This is a description for test post 1."
    assert post1.notes == "These are notes for test post 1."
    assert post1.rating == 3
    assert post1.numRatings == 12
    assert post1.start == "Kent, OH"
    assert post1.waypoints == "[{\"location\": \"Toledo, OH\", \"stopover\": true}]"
    assert post1.end == "Columbus, OH"
    assert post1.getDatabaseModel() == {'id': "96822060868999399931",
                                        'userid': "50583170224718302358",
                                        'title': "Test Post 1",
                                        'description': "This is a description for test post 1.",
                                        'notes': "These are notes for test post 1.",
                                        'rating': 3,
                                        'numRatings': 12,
                                        'start': "Kent, OH",
                                        'waypoints': "[{\"location\": \"Toledo, OH\", \"stopover\": true}]",
                                        'end': "Columbus, OH"}

def test_post_2():
    post1 = Post.Post("44165755922574917641", 
                     "02423638768591586899", 
                     "Test Post 2", 
                     "This is a description for test post 2.", 
                     "These are notes for test post 2.", 
                     4, 
                     6, 
                     "Akron, OH", 
                     "[{\"location\": \"Canton, OH\", \"stopover\": true}]",
                     "Wooster, OH")
    assert post1.id == "44165755922574917641"
    assert post1.userid == "02423638768591586899"
    assert post1.title == "Test Post 2"
    assert post1.description == "This is a description for test post 2."
    assert post1.notes == "These are notes for test post 2."
    assert post1.rating == 4
    assert post1.numRatings == 6
    assert post1.start == "Akron, OH"
    assert post1.waypoints == "[{\"location\": \"Canton, OH\", \"stopover\": true}]"
    assert post1.end == "Wooster, OH"
    assert post1.getDatabaseModel() == {'id': "44165755922574917641",
                                        'userid': "02423638768591586899",
                                        'title': "Test Post 2",
                                        'description': "This is a description for test post 2.",
                                        'notes': "These are notes for test post 2.",
                                        'rating': 4,
                                        'numRatings': 6,
                                        'start': "Akron, OH",
                                        'waypoints': "[{\"location\": \"Canton, OH\", \"stopover\": true}]",
                                        'end': "Wooster, OH"}

def test_post_3():
    post1 = Post.Post("09082850095949731619", 
                     "03256889542760712902", 
                     "Test Post 3", 
                     "This is a description for test post 3.", 
                     "These are notes for test post 3.", 
                     5, 
                     1, 
                     "Cleveland, OH", 
                     "[{\"location\": \"Toledo, OH\", \"stopover\": true}, {\"location\": \"Dayton, OH\", \"stopover\": true}, {\"location\": \"Columbus, OH\", \"stopover\": true}]",
                     "Orrville, OH")
    assert post1.id == "09082850095949731619"
    assert post1.userid == "03256889542760712902"
    assert post1.title == "Test Post 3"
    assert post1.description == "This is a description for test post 3."
    assert post1.notes == "These are notes for test post 3."
    assert post1.rating == 5
    assert post1.numRatings == 1
    assert post1.start == "Cleveland, OH"
    assert post1.waypoints == "[{\"location\": \"Toledo, OH\", \"stopover\": true}, {\"location\": \"Dayton, OH\", \"stopover\": true}, {\"location\": \"Columbus, OH\", \"stopover\": true}]"
    assert post1.end == "Orrville, OH"
    assert post1.getDatabaseModel() == {'id': "09082850095949731619",
                                        'userid': "03256889542760712902",
                                        'title': "Test Post 3",
                                        'description': "This is a description for test post 3.",
                                        'notes': "These are notes for test post 3.",
                                        'rating': 5,
                                        'numRatings': 1,
                                        'start': "Cleveland, OH",
                                        'waypoints': "[{\"location\": \"Toledo, OH\", \"stopover\": true}, {\"location\": \"Dayton, OH\", \"stopover\": true}, {\"location\": \"Columbus, OH\", \"stopover\": true}]",
                                        'end': "Orrville, OH"}

def test_post_4():
    post1 = Post.Post("74127630069740107909", 
                     "75641188490278536508", 
                     "Test Post 4", 
                     "This is a description for test post 4.", 
                     "These are notes for test post 4.", 
                     0, 
                     0, 
                     "Wilmington, NC", 
                     "",
                     "The moon")
    assert post1.id == "74127630069740107909"
    assert post1.userid == "75641188490278536508"
    assert post1.title == "Test Post 4"
    assert post1.description == "This is a description for test post 4."
    assert post1.notes == "These are notes for test post 4."
    assert post1.rating == 0
    assert post1.numRatings == 0
    assert post1.start == "Wilmington, NC"
    assert post1.waypoints == ""
    assert post1.end == "The moon"
    assert post1.getDatabaseModel() == {'id': "74127630069740107909",
                                        'userid': "75641188490278536508",
                                        'title': "Test Post 4",
                                        'description': "This is a description for test post 4.",
                                        'notes': "These are notes for test post 4.",
                                        'rating': 0,
                                        'numRatings': 0,
                                        'start': "Wilmington, NC",
                                        'waypoints': "",
                                        'end': "The moon"}

def test_post_5():
    post1 = Post.Post("81937702717455924447", 
                     "29784136616602750877", 
                     "Test Post 5", 
                     "This is a description for test post 5.", 
                     "These are notes for test post 5.", 
                     7, 
                     3000000, 
                     "Athens, OH", 
                     "[{\"location\": \"Los Angeles, CA\", \"stopover\": true}]",
                     "Athens, OH")
    assert post1.id == "81937702717455924447"
    assert post1.userid == "29784136616602750877"
    assert post1.title == "Test Post 5"
    assert post1.description == "This is a description for test post 5."
    assert post1.notes == "These are notes for test post 5."
    assert post1.rating == 7
    assert post1.numRatings == 3000000
    assert post1.start == "Athens, OH"
    assert post1.waypoints == "[{\"location\": \"Los Angeles, CA\", \"stopover\": true}]"
    assert post1.end == "Athens, OH"
    assert post1.getDatabaseModel() == {'id': "81937702717455924447",
                                        'userid': "29784136616602750877",
                                        'title': "Test Post 5",
                                        'description': "This is a description for test post 5.",
                                        'notes': "These are notes for test post 5.",
                                        'rating': 7,
                                        'numRatings': 3000000,
                                        'start': "Athens, OH",
                                        'waypoints': "[{\"location\": \"Los Angeles, CA\", \"stopover\": true}]",
                                        'end': "Athens, OH"}