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
    browser.get('localhost:5000')
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

    
    original_window = browser.window_handles[0]
    browser.switch_to_window(original_window)
    time.sleep(5)
    
    account = browser.find_element_by_xpath('//*[@id="menu"]/li[3]/a')
    account.click()
    time.sleep(2)

@then(u'We can see our name')
def step_impl(context):
    browser = context.browser
    name = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div[1]/div/h2')
    assert 'John Doe' in browser.page_source

@then(u'We can edit and view our bio')
def step_impl(context):
    browser = context.browser
    time.sleep(2)

    car_edit = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div[3]/button[1]')
    car_save = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div[3]/button[2]')
    car_text = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div[2]/div/input')
    time.sleep(1)
    car_edit.click()
    time.sleep(1)
    car_text.send_keys('Volvo')
    time.sleep(1)
    car_save.click()
    time.sleep(1)
    assert 'Volvo' in browser.page_source

    bio_edit = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div[5]/button[1]')
    bio_save = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div[5]/button[2]')
    bio_text = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div[4]/div/div/textarea[3]')
    time.sleep(1)
    bio_edit.click()
    time.sleep(1)
    bio_text.send_keys('This is my really cool bio!')
    time.sleep(1)
    bio_save.click()
    time.sleep(1)
    assert 'This is my really cool bio!' in browser.page_source   
    
    browser.quit()

@given(u'We are signed in on the explore page')
def step_impl(context):
    #local testing
    browser = webdriver.Chrome()

    context.browser = browser
    browser.get('localhost:5000')
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
    time.sleep(7)

    
    original_window = browser.window_handles[0]
    browser.switch_to_window(original_window)
    time.sleep(5)
    assert 'justin mckenna' in browser.page_source

@then(u'We can click on someones name and see their profile')
def step_impl(context):
    browser = context.browser
    name = browser.find_element_by_xpath('//*[@id="content"]/div/div/div/div[1]/div/div[1]/div[1]/div[1]/a')
    name.click()
    time.sleep(3)
    assert 'account' in browser.current_url
    assert 'justin mckenna' in browser.page_source

    browser.quit()