from behave import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time
import os

#See the great things about our company and the employees!
@given(u'There is an about page')
def step_impl(context):
    #local testing
    browser = webdriver.Chrome()

    context.browser = browser
    browser.get('localhost:5000/about/')
    browser.maximize_window()

@then(u'We want to see a description of the company')
def step_impl(context):
    browser = context.browser
    assert "Routes Per Mile is a website dedicated to giving you an unparalleled way to share routes with other drivers." in browser.page_source

@then(u'We want to see a description of all the employees')
def step_impl(context):
    browser = context.browser

    #if names are in page source, then descriptions are as well
    assert "Hayden Moore" in browser.page_source
    assert "Tyler Wells" in browser.page_source
    assert "Nadia Karina Camacho Cabrera" in browser.page_source
    assert "Clay James" in browser.page_source
    assert "Daniel Loftus" in browser.page_source
    assert "Josh Dotson" in browser.page_source
    assert "Justin McKenna" in browser.page_source
    assert "Roger Cooper" in browser.page_source
    assert "Max Kotlan" in browser.page_source

    browser.quit()