from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time
import os


@given(u'Server is running')
def step_impl(context):
    #setting up remote browser
	username = os.environ["SAUCE_USERNAME"]
	access_key = os.environ["SAUCE_ACCESS_KEY"]
	caps = {'browserName': 'Chrome',
		    'version': '60.0',
		    'tunnel-identifier': os.environ["TRAVIS_JOB_NUMBER"]}
	browser = webdriver.Remote(
    	desired_capabilities= caps,
    	command_executor='http://%s:%s@ondemand.saucelabs.com:80/wd/hub' % (username, access_key)
	)
	context.browser = browser

@then(u'Go to hosted page')
def step_impl(context):
	browser = context.browser
	browser.get('localhost:5000')
	assert "Routes Per Mile" in browser.title
	browser.close()
	time.sleep(1)