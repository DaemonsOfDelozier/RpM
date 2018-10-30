from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

@given(u'we click on google sign in button')
def step_impl(context):
	browser = webdriver.Chrome()
	browser.get('localhost:5000')
	context.browser = browser
	time.sleep(1)

@when(u'we sign in to google')
def step_impl(context):
	time.sleep(1)
	
@then(u'we should see our name on the nav bar')
def step_impl(context):
	time.sleep(1)

@when(u'we should be able to log out afterwards')
def step_impl(context):
	time.sleep(1)

