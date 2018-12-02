from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time
import os

	
@then(u'We create a post')
def step_impl(context):
	browser = context.browser
	google_beat_us = context.google_beat_us
	createnwpost = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/a/button');
	createnwpost.click();
	title = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div/div[1]/div/input')
	descritpion = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div/div[2]/div/div/textarea[3]')

	continuebutton = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div/div[3]/div/div[2]/div[1]/div[2]/button')
	
	title.send_keys('Default Route')	
	descritpion.send_keys('Test Description')
	
	route1 = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div/div[3]/div/div[2]/div[1]/div[1]/div/div/input')
	route1.send_keys('Kent State')
	continuebutton.click();
	time.sleep(1)

	
	route2 = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div/div[3]/div/div[2]/div[2]/div[1]/div/div/input')
	route2.send_keys('Pizza Hut, Kent')
	continuebutton.click();
	time.sleep(1)

	
	route3 = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div/div[3]/div/div[2]/div[3]/div[1]/div/div/input')
	route3.send_keys('Walmart, Kent')
	continuebutton.click();
	time.sleep(1)
	
	route4 = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div/div[3]/div/div[2]/div[4]/div[1]/div/div/input')
	route4.send_keys('Kent State')

	time.sleep(1)
	
	submitbuttom = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div/div[3]/div/div[2]/div[5]/button')
	submitbuttom.click();
	
	time.sleep(1)
	
	confirmbutton = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div/div[5]/div[2]/button')
	confirmbutton.click();

	time.sleep(4)
	
	assert "800 E Summit St, Kent, OH 44240, USA" in browser.page_source
	assert "Test Description" in browser.page_source
	assert "1715 OH-59, Kent, OH 44240, USA" in browser.page_source
	assert "250 Tallmadge Rd, Kent, OH 44240, USA" in browser.page_source

	
	browser.quit();

	
	

