from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time
import os

#See the navigation bar and go to every page on desktop
@given(u'We go to the account page, and we are signed in')
def step_impl(context):
    #local testing
    browser = webdriver.Chrome()

    context.browser = browser
    browser.get('localhost:5000/account/')
    browser.maximize_window()
    sign_in_button = browser.find_element_by_xpath('//*[@id="mainNav"]/div/div[3]/button')
    sign_in_button.click()
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
    if(not(google_beat_us)):
        #we logged in!
	    original_window = browser.window_handles[0]
	    browser.switch_to_window(original_window)
    time.sleep(5)

@then(u'We can see our name')
def step_impl(context):
    browser = context.browser
    name = browser.find_element_by_xpath('xpath goes here')
    assert name == "John Doe"

@then(u'We can edit and view our bio')
def step_impl(context):
    browser = context.browser
    time.sleep(5)
    bio = browser.find_element_by_xpath('bio xpath')
    assert bio == ''
    edit_button = browser.find_element_by_xpath('edit button xpath')
    edit_button.click()
    time.sleep(5)
    edit_text_box = browser.find_element_by_xpath('edit text box xpath')
    edit_text_box.send_keys('This is my really cool bio!')
    assert bio == 'This is my really cool bio!'

    browser.quit()

@given(u'We see someone elses post')
def step_impl(context):
    #local testing
    browser = webdriver.Chrome()

    context.browser = browser
    browser.get('localhost:5000/account/')
    browser.maximize_window()

@then(u'We can click on their name')
def step_impl(context):
    pass

@then(u'We can see their profile')
def step_impl(context):
    pass