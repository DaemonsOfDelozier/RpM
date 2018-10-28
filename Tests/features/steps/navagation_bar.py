from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

browser = webdriver.Chrome()
browser.get('http://127.0.0.1:5000/')

#See the navagation bar
@given(u'There is a navigation bar')
def step_impl(context):
	browser.maximize_window()
	assert 'mainNav' in browser.page_source
	time.sleep(1)

@then(u'We want to see RPM, Explore, Route Map, Help, and Account')
def step_impl(context):
	assert 'RpM' in browser.page_source
	assert 'Explore' in browser.page_source
	assert 'Route Map' in browser.page_source
	assert 'Help' in browser.page_source
	assert 'Account' in browser.page_source
	time.sleep(1)
	
#On a mobile device
@given(u'Our screen ratio is that of a mobile device')
def step_impl(context):
	browser.set_window_size(375, 812)
	time.sleep(1)

@when(u'We click the menu button')
def step_impl(context):
	menu_button = browser.find_element_by_xpath('/html/body/div[1]/a')
	menu_button.click()
	time.sleep(1)

@then(u'The navigation menu will expand')
def step_impl(context):
	nav_menu = browser.find_element_by_xpath('/html/body/div[1]')
	nav_height = nav_menu.size.get('height')
	assert nav_height > 50
	browser.close()
	time.sleep(1)
