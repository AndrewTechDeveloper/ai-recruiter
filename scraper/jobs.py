
m selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait as Wait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
from selenium.webdriver.common.by import By
import pandas as pd

start_url = 'https://www.vorkers.com/company_list?field=&pref=&src_str=&sort=1'
#start_url = 'https://www.vorkers.com/company_list?field=&pref=&src_str=&sort=1&next_page=17'
webdriver = webdriver.Chrome()
webdriver.get(start_url)
webdriver.find_element_by_xpath("//*[@id='contentsBody']/section/div[2]/div[2]/ul/li[2]/a").click()
csv = []
run = True

while run == True:
    checkNextBtn = webdriver.find_elements_by_css_selector('#contentsBody > section > div.paging > ul > li:last-child > a')
    itemsNum = webdriver.find_elements_by_css_selector('#contentsBody > section > ul > li')
    for i in range(1, len(itemsNum) + 1):
        row = []
        logo = webdriver.find_element_by_xpath("//*[@id='contentsBody']/section/ul/li[" + str(i) + "]/div[1]/div[2]/img").get_attribute("src")
        name = webdriver.find_element_by_xpath("//*[@id='contentsBody']/section/ul/li[" + str(i) + "]/div[1]/div[1]/h3/a").text
        link = webdriver.find_element_by_xpath("//*[@id='contentsBody']/section/ul/li[" + str(i) + "]/div[1]/div[1]/h3/a").get_attribute("href")
        totalRate = webdriver.find_element_by_xpath("//*[@id='contentsBody']/section/ul/li[" + str(i) + "]/div[1]/div[3]/p[2]").text
        category = webdriver.find_element_by_xpath("//*[@id='contentsBody']/section/ul/li[" + str(i) + "]/div[1]/div[3]/p[3]").text
        reviewNums = webdriver.find_element_by_xpath("//*[@id='contentsBody']/section/ul/li[" + str(i) + "]/div[1]/ul/li[1]/a/dl/dd/span[1]").text
        workingHours = webdriver.find_element_by_xpath("//*[@id='contentsBody']/section/ul/li[" + str(i) + "]/div[3]/div[2]/div/div[1]/dl/dd").text
        consumeDayOff = webdriver.find_element_by_xpath("//*[@id='contentsBody']/section/ul/li[" + str(i) + "]/div[3]/div[2]/div/div[2]/dl/dd").text
        jobs = webdriver.find_elements_by_css_selector('#contentsBody > section > ul > li:nth-child(' + str(i) + ') > div.searchMoreDetail > div.searchMoreDetail_right > ul > li > a')
        paths = Wait(webdriver,5).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "#highcharts-" + str(3*(i-1)) + " > svg > g.highcharts-series-group > g.highcharts-markers.highcharts-series-0.highcharts-tracker > path")))
        jobArray = []
        rateArray = []
        for job in jobs:
            jobArray.append(job.text)
        for path in paths:
            action = ActionChains(webdriver)
            action.move_to_element(path)
            action.move_to_element(path)
            action.perform()
            rate = Wait(webdriver,5).until(EC.presence_of_element_located((By.CSS_SELECTOR,"#highcharts-" + str(3*(i-1)) + " > svg > g.highcharts-tooltip > text"))).text
            rateArray.append(rate)

        row.append(logo)
        row.append(name)
        row.append(link)
        row.append(totalRate)
        row.append(category)
        row.append(reviewNums)
        row.append(workingHours)
        row.append(consumeDayOff)
        row.append(jobArray)
        row.append(rateArray)
        print('----------')
        print(row)
        print('----------')
        csv.append(row)
    if checkNextBtn:
        print('next')
        nextBtn = webdriver.find_element_by_css_selector('#contentsBody > section > div.paging > ul > li:last-child > a')
        nextBtn.click()
        sleep(1)
    else:
        print('complete')
        run = False

headers = ['logo','name','link','totalRate','category','reviewNums','workingHours','consumeDayOff','jobArray','rateArray']
df = pd.DataFrame(csv, columns=headers)
df.to_csv("jobs.csv", index=False, encoding="utf_8_sig")



