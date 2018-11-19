from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time
import os

#Sign in and out on desktop
@given(u'we click on google sign in button')
def step_impl(context):
	#local testing
	browser = webdriver.Chrome()
	
	#tests start now
	browser.get('localhost:5000')
	context.browser = browser
	browser.maximize_window()
	sign_in_button = browser.find_element_by_xpath('//*[@id="mainNav"]/div/div[2]/button')
	sign_in_button.click()

@when(u'we sign in to google')
def step_impl(context):
	browser = context.browser
	
	sign_in_window = browser.window_handles[1]
	browser.switch_to_window(sign_in_window)
	time.sleep(3)
	
	email_text_box = browser.find_element_by_xpath('//*[@id="identifierId"]')
	email_text_box.send_keys('testingiscool86@gmail.com')
	email_next_button = browser.find_element_by_xpath('//*[@id="identifierNext"]')
	email_next_button.click()
	time.sleep(3)
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
		time.sleep(3)
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
		time.sleep(1)
	browser.quit()

#Sign in and out on mobile
@given(u'we click on google sign in button on mobile')
def step_impl(context):
	#local testing
	mobile_emulation = { "deviceName": "iPhone X" }
	chrome_options = webdriver.ChromeOptions()
	chrome_options.add_experimental_option("mobileEmulation", mobile_emulation)
	browser = webdriver.Chrome(desired_capabilities = chrome_options.to_capabilities())

	context.browser = browser
	browser.get('localhost:5000')

	sign_in_button = browser.find_element_by_xpath('//*[@id="mainNav"]/div/div[2]/button')
	sign_in_button.click()

@when(u'we sign in to google on mobile')
def step_impl(context):
	browser = context.browser
	
	sign_in_window = browser.window_handles[1]
	browser.switch_to_window(sign_in_window)
	time.sleep(3)
	
	email_text_box = browser.find_element_by_xpath('//*[@id="identifierId"]')
	email_text_box.send_keys('testingiscool86@gmail.com')
	email_next_button = browser.find_element_by_xpath('//*[@id="identifierNext"]')
	email_next_button.click()
	time.sleep(3)
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
	
@then(u'we should see our name on the mobile nav bar')
def step_impl(context):
	google_beat_us = context.google_beat_us
	browser = context.browser
	if(not(google_beat_us)):
		#we logged in!
		original_window = browser.window_handles[0]
		browser.switch_to_window(original_window)
		upper_right_text = browser.find_element_by_xpath('//*[@id="mainNav"]/div/div[2]/div').text
		assert upper_right_text == 'JOHN DOELogout'
		time.sleep(3)
	else:
		#closing sign in
		browser.close()
		original_window = browser.window_handles[0]
		browser.switch_to_window(original_window)
		context.browser = browser

@then(u'we should be able to log out on mobile')
def step_impl(context):
	google_beat_us = context.google_beat_us
	browser = context.browser
	if(not(google_beat_us)):
		#making sure we logged out
		logout_button = browser.find_element_by_xpath('//*[@id="mainNav"]/div/div[2]/div/button')
		logout_button.click()
		assert not('JOHN DOE' in browser.page_source)
		time.sleep(1)
	browser.quit()
