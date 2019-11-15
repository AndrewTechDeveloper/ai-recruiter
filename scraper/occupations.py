from selenium import webdriver
from time import sleep
from selenium.webdriver.common.by import By
import pandas as pd

start_url = 'https://www.job-j.net/contents/about_genre/'
webdriver = webdriver.Chrome()
webdriver.get(start_url)
categories = [
    "business",
    "office",
    "shop",
    "food",
    "service",
    "event",
    "culture",
    "beauty",
    "medical",
    "driver",
    "manufacture",
    "engineer",
    "creative",
    "technical",
    "construction"
]
sleep(1)
csv = []
for category in categories:
    jobs = webdriver.find_elements_by_css_selector("#" + category + " > table > tbody > tr")
    for job in jobs:
        row = []
        name = job.find_element_by_css_selector("th")
        about = job.find_element_by_css_selector("td")
        print(name.text)
        print(about.text)
        row.append(name.text)
        row.append(about.text)
        csv.append(row)

headers = ['name','about']
df = pd.DataFrame(csv, columns=headers)
df.to_csv("occupations.csv", index=False, encoding="utf_8_sig")

