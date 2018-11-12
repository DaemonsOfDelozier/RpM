from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time
import os

#See the navagation bar
@given(u'There is a navigation bar')
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

	#for local testing
	#browser = webdriver.Chrome()

	context.browser = browser
	browser.get('localhost:5000')
	browser.maximize_window()
	assert 'mainNav' in browser.page_source

@then(u'We want to see RPM, Explore, Route Map, Help, and Account')
def step_impl(context):
	browser = context.browser
	rpm_button = browser.find_element_by_xpath('//*[@id="logo"]/div[2]/img')
	assert 'Explore' in browser.page_source
	assert 'Route Map' in browser.page_source
	assert 'About Us' in browser.page_source
	assert 'Account' in browser.page_source
	browser.quit()
	
#On a mobile device
@given(u'We are emulating a mobile device')
def step_impl(context):
	#setting up remote browser
	username = os.environ["SAUCE_USERNAME"]
	access_key = os.environ["SAUCE_ACCESS_KEY"]
	mobile_emulation = { "deviceName": "iPhone X" }
	chrome_options = webdriver.ChromeOptions()
	chrome_options.add_experimental_option("mobileEmulation", mobile_emulation)
	caps = chrome_options.to_capabilities()
	caps['browserName'] = 'Chrome'
	caps['version'] = '60.0'
	caps['tunnel-identifier'] = os.environ["TRAVIS_JOB_NUMBER"]
	#caps = {'browserName': 'Chrome',
	#	    'version': '60.0',
	#	    'tunnel-identifier': os.environ["TRAVIS_JOB_NUMBER"]}
	browser = webdriver.Remote(
    	desired_capabilities= caps,
    	command_executor='http://%s:%s@ondemand.saucelabs.com:80/wd/hub' % (username, access_key)
	)

	#for local testing
	#mobile_emulation = { "deviceName": "iPhone X" }
	#chrome_options = webdriver.ChromeOptions()
	#chrome_options.add_experimental_option("mobileEmulation", mobile_emulation)
	#browser = webdriver.Chrome(desired_capabilities = chrome_options.to_capabilities())

	context.browser = browser
	browser.get('localhost:5000')

@when(u'We click the menu button')
def step_impl(context):
	browser = context.browser
	menu_button = browser.find_element_by_xpath('//*[@id="logo"]/div[1]/a')
	menu_button.click()
	time.sleep(1)

@then(u'The navigation menu will expand')
def step_impl(context):
	browser = context.browser
	nav_menu = browser.find_element_by_xpath('//*[@id="logo"]/div[1]')
	nav_height = nav_menu.size.get('height')
	assert nav_height > 50
	browser.quit()
