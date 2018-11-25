#testing get all posts component
import sys
import os
sys.path.insert(0, "../Server")
from app import GetAllPosts

#copies test-db to server folder and changes name
def setup():
    os.