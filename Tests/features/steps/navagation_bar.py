from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time



@given(u'There is a navigation bar')
def step_impl(context):
    browser = webdriver.Chrome()
    context.browser = browser
    assert 'mainNav' in browser.page_source

@then(u'We want to see RPM, Explore, Route Map, Help, and Account')
def step_impl(context):
    browser = context.browser
    assert 'RpM' in browser.page_source
    assert 'Explore' in browser.page_source
    assert 'Route Map' in browser.page_source
    assert 'Help' in browser.page_source
    assert 'Account' in browser.page_source
    
