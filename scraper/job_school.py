from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait as Wait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
from selenium.webdriver.common.by import By
import pandas as pd

start_url = 'https://manabi.benesse.ne.jp/ap/daigaku/search/nanido/'
webdriver = webdriver.Chrome()
webdriver.get(start_url)

csv = []
run = True
while run:
    # #国立
    # public = webdriver.find_element_by_xpath("//*[@id='itiran_list_04']/li[1]/a")
    # public.click()
    # public_rows = webdriver.find_elements_by_css_selector("#hensachi_table_01 > tbody > tr")
    # for public_row in public_rows:
    #     public_level = public_row.find_element_by_css_selector("th > p")
    #     public_names = public_row.find_elements_by_css_selector("td > ul > li > ul > li")
    #     for public_name in public_names:
    #         row = []
    #         print(public_level.text)
    #         print(public_name.text)
    #         row.append(public_level.text)
    #         row.append(public_name.text)
    #         csv.append(row)
    # webdriver.find_element_by_xpath("//*[@id='itiran_list_04']/li[2]/a").click()
    # sleep(1)
    # #私立
    # print("---------------")
    # print("private")
    # print("---------------")
    # private_rows = webdriver.find_elements_by_css_selector("#hensachi_table_01 > tbody > tr")
    # for private_row in private_rows:
    #     private_level = private_row.find_element_by_css_selector("th > p")
    #     private_names = private_row.find_elements_by_css_selector("td > ul > li > ul > li")
    #     for private_name in private_names:
    #         row = []
    #         print(private_level.text)
    #         print(private_name.text)
    #         row.append(private_level.text)
    #         row.append(private_name.text)
    #         csv.append(row)
    webdriver.find_element_by_xpath("//*[@id='itiran_list_04']/li[3]/a").click()
    sleep(1)
    #大学校
    print("---------------")
    print("government")
    print("---------------")
    government_rows = webdriver.find_elements_by_css_selector("#hensachi_table_01 > tbody > tr")
    for government_row in government_rows:
        government_level = government_row.find_element_by_css_selector("th > p")
        government_names = government_row.find_elements_by_css_selector("td > ul > li > ul > li")
        for government_name in government_names:
            row = []
            print(government_level.text)
            print(government_name.text)
            row.append(government_level.text)
            row.append(government_name.text)
            csv.append(row)
    webdriver.find_element_by_xpath("//*[@id='itiran_list_04']/li[4]/a").click()
    sleep(1)
    #短大
    print("---------------")
    print("vocational")
    print("---------------")
    vocational_rows = webdriver.find_elements_by_css_selector("#hensachi_table_01 > tbody > tr")
    for vocational_row in vocational_rows:
        vocational_level = vocational_row.find_element_by_css_selector("th > p")
        vocational_names = vocational_row.find_elements_by_css_selector("td > ul > li > ul > li")
        for vocational_name in vocational_names:
            row = []
            print(vocational_level.text)
            print(vocational_name.text)
            row.append(vocational_level.text)
            row.append(vocational_name.text)
            csv.append(row)
    run = False

headers = ['level','name']
df = pd.DataFrame(csv, columns=headers)
df.to_csv("job_school_2.csv", index=False, encoding="utf_8_sig")

