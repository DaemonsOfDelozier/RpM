#testing load user component
import sys
import os
from shutil import copy
sys.path.insert(0, "../Server")
import app #creates db.json in tests folder
from Models import User

def test_load_user():
    #setup
    copy('test-db.json', 'db.json')

    #load user clay from db
    assert User.User("111878986403861738670", "Clay James", "clayw.james@gmail.com") == app.loadUser("111878986403861738670")

    #load user joshua from db
    assert User.User("112242778374526994969", "Joshua Dotson", "jdotso11@kent.edu") == app.loadUser("112242778374526994969")

    #load user roger from db
    assert User.User("107379256252231037647", "Roger Cooper", "roger.h.cooper@gmail.com") == app.loadUser("107379256252231037647")

    #load user justin from db
    assert User.User("116982725875632556390", "justin mckenna", "mckennaman123@gmail.com") == app.loadUser("116982725875632556390")

    #cleanup
    os.remove('db.json')