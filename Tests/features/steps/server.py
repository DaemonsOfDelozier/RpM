from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

@given(u'Server is running')
def step_impl(context):
    # The server must be started manually.
    time.sleep(1)

@then(u'Go to hosted page')
def step_impl(context):
	browser = webdriver.Chrome()
	browser.get('http://127.0.0.1:5000/')
	assert "Routes Per Mile" in browser.title
	time.sleep(1)