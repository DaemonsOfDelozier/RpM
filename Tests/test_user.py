#testing user component
import sys
sys.path.insert(0, "../Server/Models")
import User

def test_user_stone():
    stone = User.User("15559907691249342452", "Stone Ermintrude", "fmerges@att.net")
    assert stone.id == "15559907691249342452"
    assert stone.name == "Stone Ermintrude"
    assert stone.email == "fmerges@att.net"
    assert stone.getDatabaseModel() == {'id': "15559907691249342452", 
                                        'name': "Stone Ermintrude",
                                        'email': "fmerges@att.net"}

def test_user_sarina():
    stone = User.User("01408433132153922941", "Sarina Bryson", "gommix@yahoo.com")
    assert stone.id == "01408433132153922941"
    assert stone.name == "Sarina Bryson"
    assert stone.email == "gommix@yahoo.com"
    assert stone.getDatabaseModel() == {'id': "01408433132153922941", 
                                        'name': "Sarina Bryson",
                                        'email': "gommix@yahoo.com"}

def test_user_darla():
    stone = User.User("81110540176349414340", "Darla Brett", "research@live.com")
    assert stone.id == "81110540176349414340"
    assert stone.name == "Darla Brett"
    assert stone.email == "research@live.com"
    assert stone.getDatabaseModel() == {'id': "81110540176349414340", 
                                        'name': "Darla Brett",
                                        'email': "research@live.com"}       

def test_user_ferdie():
    stone = User.User("27590093802242994513", "Ferdie Kurt", "isotopian@optonline.net")
    assert stone.id == "27590093802242994513"
    assert stone.name == "Ferdie Kurt"
    assert stone.email == "isotopian@optonline.net"
    assert stone.getDatabaseModel() == {'id': "27590093802242994513", 
                                        'name': "Ferdie Kurt",
                                        'email': "isotopian@optonline.net"}

def test_user_gayla():
    stone = User.User("73013361165793008717", "Gayla Dion", "biglou@yahoo.ca")
    assert stone.id == "73013361165793008717"
    assert stone.name == "Gayla Dion"
    assert stone.email == "biglou@yahoo.ca"
    assert stone.getDatabaseModel() == {'id': "73013361165793008717", 
                                        'name': "Gayla Dion",
                                        'email': "biglou@yahoo.ca"}                                                                                                             