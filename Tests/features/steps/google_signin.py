from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time

@given(u'we click on google sign in button')
def step_impl(context):
	#setting up remote browser
	SAUCE_USERNAME = 'mckennaman123'
	SAUCE_ACCESS_KEY = '47e14922-2ea6-410c-bee8-8fcecd70045a'
	browser = webdriver.Remote(
    	desired_capabilities=webdriver.DesiredCapabilities.CHROME,
    	command_executor='http://%s:%s@ondemand.saucelabs.com:80/wd/hub' %
    	(SAUCE_USERNAME, SAUCE_ACCESS_KEY)
	)
	#tests start now
	context.browser = browser
	browser.get('http://localhost:5000')
	browser.maximize_window()
	sign_in_button = browser.find_element_by_xpath('//*[@id="mainNav"]/div/div[2]/button')
	sign_in_button.click()

@when(u'we sign in to google')
def step_impl(context):
	browser = context.browser
	
	#switching to sign in window
	sign_in_window = browser.window_handles[1]
	browser.switch_to_window(sign_in_window)
	time.sleep(5)
	
	#entering email and password
	email_text_box = browser.find_element_by_xpath('//*[@id="identifierId"]')
	email_text_box.send_keys('testingiscool86@gmail.com')
	email_next_button = browser.find_element_by_xpath('//*[@id="identifierNext"]')
	email_next_button.click()
	time.sleep(5)
	password_text_box = browser.find_element_by_xpath('//*[@id=\"password\"]/div[1]/div/div[1]/input')
	password_text_box.send_keys('testing4lyfe')
	password_next_button = browser.find_element_by_xpath('//*[@id="passwordNext"]')
	password_next_button.click()
	time.sleep(5)

	#checks if google wants us to verify via phone number
	#if this happens we cant continue the scenario
	google_beat_us = False
	if (len(browser.window_handles) == 2): #if the sign in window is still open
		google_beat_us = True
	context.google_beat_us = google_beat_us
	
@then(u'we should see our name on the nav bar')
def step_impl(context):
	google_beat_us = context.google_beat_us
	browser = context.browser
	if(not(google_beat_us)):
		#we logged in!
		original_window = browser.window_handles[0]
		browser.switch_to_window(original_window)
		upper_right_text = browser.find_element_by_xpath('//*[@id="mainNav"]/div/div[2]/div').text
		assert upper_right_text == 'JOHN DOELogout'
	else:
		#closing sign in
		browser.close()
		original_window = browser.window_handles[0]
		browser.switch_to_window(original_window)
		context.browser = browser

@then(u'we should be able to log out afterwards')
def step_impl(context):
	google_beat_us = context.google_beat_us
	browser = context.browser
	if(not(google_beat_us)):
		#making sure we logged out
		logout_button = browser.find_element_by_xpath('//*[@id="mainNav"]/div/div[2]/div/button')
		logout_button.click()
		assert not('JOHN DOE' in browser.page_source)
		time.sleep(5)
	browser.close()
