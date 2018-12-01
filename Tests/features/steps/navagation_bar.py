from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time
import os

#See the navigation bar and go to every page on desktop
@given(u'There is a navigation bar')
def step_impl(context):
	#local testing
	browser = webdriver.Chrome()

	context.browser = browser
	browser.get('localhost:5000')
	browser.maximize_window()
	assert 'mainNav' in browser.page_source

@then(u'We want to see RPM, Explore, Route Map, About, and Account')
def step_impl(context):
	browser = context.browser
	rpm_button = browser.find_element_by_xpath('//*[@id="logo"]/div/img')
	assert 'Explore' in browser.page_source
	assert 'About' in browser.page_source
	assert 'Account' in browser.page_source

@then(u'Go to every page on desktop')
def step_impl(context):
	browser = context.browser

	#going to explore
	explore_button = browser.find_element_by_xpath('//*[@id="menu"]/li[1]/a')
	explore_button.click()
	assert 'explore' in browser.current_url

	#going to about
	explore_button = browser.find_element_by_xpath('//*[@id="menu"]/li[3]/a')
	explore_button.click()
	assert 'about' in browser.current_url

	#going to account
	explore_button = browser.find_element_by_xpath('//*[@id="menu"]/li[4]/a')
	explore_button.click()
	assert 'account' in browser.current_url

	#going to 404 page
	browser.get('localhost:5000/not_a_page')
	assert 'Sorry, this isn\'t a valid url!' in browser.page_source

	browser.quit()
	
#See the navigation bar and go to every page on mobile
@given(u'We are emulating a mobile device')
def step_impl(context):
	#local testing
	mobile_emulation = { "deviceName": "iPhone X" }
	chrome_options = webdriver.ChromeOptions()
	chrome_options.add_experimental_option("mobileEmulation", mobile_emulation)
	browser = webdriver.Chrome(desired_capabilities = chrome_options.to_capabilities())

	context.browser = browser
	browser.get('localhost:5000')

@when(u'We click the menu button')
def step_impl(context):
	browser = context.browser
	menu_button = browser.find_element_by_xpath('//*[@id="mobileMenu"]/div/a')
	menu_button.click()
	time.sleep(1)

@then(u'The navigation menu will expand')
def step_impl(context):
	browser = context.browser
	nav_menu = browser.find_element_by_xpath('//*[@id="mobileMenu"]/div')
	nav_height = nav_menu.size.get('height')
	assert nav_height > 50

@then(u'Go to every page on mobile')
def step_impl(context):
	browser = context.browser

	#going to explore page
	menu_button = browser.find_element_by_xpath('//*[@id="mobileMenu"]/div/a')
	explore_button = browser.find_element_by_xpath('//*[@id="mobileMenu"]/div/ul/li[1]/a')
	explore_button.click()
	assert 'explore' in browser.current_url
	
	#going to About page
	menu_button = browser.find_element_by_xpath('//*[@id="mobileMenu"]/div/a')
	menu_button.click()
	time.sleep(1)
	about_button = browser.find_element_by_xpath('//*[@id="mobileMenu"]/div/ul/li[3]/a')
	about_button.click()
	assert 'about' in browser.current_url
	time.sleep(1)

	#going to Account page
	menu_button = browser.find_element_by_xpath('//*[@id="mobileMenu"]/div/a')
	menu_button.click()
	time.sleep(1)
	account_button = browser.find_element_by_xpath('//*[@id="mobileMenu"]/div/ul/li[4]/a')
	account_button.click()
	assert 'account' in browser.current_url

	#going to 404 page
	browser.get('localhost:5000/also_not_a_page')
	assert 'Sorry, this isn\'t a valid url!' in browser.page_source

	browser.quit()