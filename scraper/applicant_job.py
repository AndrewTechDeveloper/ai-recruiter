from selenium import webdriver
from time import sleep
from selenium.webdriver.common.by import By
import pandas as pd

start_url = 'https://www.job-j.net/contents/about_genre/'
webdriver = webdriver.Chrome()
webdriver.get(start_url)
sleep(1)
jobs = webdriver.find_elements_by_css_selector("#business > table > tbody > tr")
csv = []
for job in jobs:
    row = []
    name = job.find_element_by_css_selector("th")
    about = job.find_element_by_css_selector("td")
    print(name.text)
    print(about.text)
    row.append(job.text)
    row.append(about.text)
    csv.append(row)

# headers = ['name']
# df = pd.DataFrame(csv, columns=headers)
# df.to_csv("applicant_jobs.csv", index=False, encoding="utf_8_sig")
#

