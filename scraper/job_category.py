from selenium import webdriver
from time import sleep
from selenium.webdriver.common.by import By
import pandas as pd

start_url = 'https://www.vorkers.com/company_list?field=&pref=&src_str=&sort=1'
webdriver = webdriver.Chrome()
webdriver.get(start_url)
webdriver.find_element_by_xpath("//*[@id='contentsBody']/div[1]/div/form/div/dl/dd[2]/button").click()
sleep(1)
categories = webdriver.find_elements_by_class_name("jsChangeField")

csv = []
for category in categories:
    print(category.text)
    csv.append(category.text)

headers = ['name']
df = pd.DataFrame(csv, columns=headers)
df.to_csv("job_category.csv", index=False, encoding="utf_8_sig")

