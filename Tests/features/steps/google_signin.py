from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

@given(u'we click on google sign in button')
def step_impl(context):
	browser = webdriver.Chrome()
	context.browser = browser
	browser.get('localhost:5000')
	browser.maximize_window()
	sign_in_button = browser.find_element_by_xpath('//*[@id="mainNav"]/div/button')
	sign_in_button.click()

@when(u'we sign in to google')
def step_impl(context):
	browser = context.browser
	
@then(u'we should see our name on the nav bar')
def step_impl(context):
	browser = context.browser

@then(u'we should be able to log out afterwards')
def step_impl(context):
	browser = context.browser
	browser.close()
