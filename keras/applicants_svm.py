import tensorflow as tf
from itertools import chain
from keras.layers import Dense
from keras.models import Sequential
from keras.callbacks import History
from keras.optimizers import RMSprop
from sklearn.model_selection import train_test_split
import keras.backend as K
import pandas as pd
import numpy as np
import csv

def binary_loss(y_true, y_pred):
    bce = K.binary_crossentropy(y_true, y_pred)
    return K.sum(bce, axis=-1)

def binary_acc(y_true, y_pred):
    pred = K.cast(K.greater_equal(y_pred, 0.5), "float")
    flag = K.cast(K.equal(y_true, pred), "float")
    return K.mean(flag, axis=-1)

def total_acc(y_true, y_pred):
    pred = K.cast(K.greater_equal(y_pred, 0.5), "float")
    flag = K.cast(K.equal(y_true, pred), "float")
    return K.prod(flag, axis=-1)

def covert_int_array(arrays, y_nums, x_nums):
    zeros = np.zeros((y_nums, x_nums))
    for index, array in enumerate(arrays):
        for a in array:
            zeros[index][int(a)-1] = 1
    return zeros

df = pd.read_csv('./ai_recruiter_development.csv')
applicant_size = 13
job_size = 18
industry_size = 67
x_factors_size = applicant_size + job_size * 2 + industry_size * 2

applicant_data = df.drop(['selected_company_id', 'applicant_id', 'ex_jobs', 'ex_industries', 'jobs', 'industries'], axis=1).to_numpy(dtype='float32')
jobs = covert_int_array(list(csv.reader(df.jobs.values)), len(df), job_size)
ex_jobs = covert_int_array(list(csv.reader(df.ex_jobs.values)), len(df), job_size)
industries = covert_int_array(list(csv.reader(df.industries.values)), len(df), industry_size)
ex_industries = covert_int_array(list(csv.reader(df.ex_industries.values)), len(df), industry_size)

x = np.zeros((len(df), x_factors_size))
for i in range(len(x)):
    x[i] = list(chain(applicant_data[i], jobs[i], ex_jobs[i], industries[i], ex_industries[i]))
y = covert_int_array(list(csv.reader(df.selected_company_id.values)), len(df), 500)
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=1, shuffle=True)
x_train, x_valid, y_train, y_valid = train_test_split(x_train, y_train, test_size=0.2, random_state=1, shuffle=True)

model = Sequential()
model.add(Dense(units=100, activation='relu', input_dim=183))
model.add(Dense(units=300, activation='relu', input_dim=100))
model.add(Dense(units=500, activation='sigmoid', input_dim=300))
model.compile(optimizer=RMSprop(), loss=[binary_loss], metrics=[binary_acc, total_acc])
hist = model.fit(x_train, y_train,
                    epochs=100,
                    verbose=1,
                    batch_size=32,
                    validation_data=(x_valid, y_valid))

scores = model.evaluate(x_test, y_test, verbose=1)
print('Test loss:', scores[0])
print('Test accuracy:', scores[1])
preds = model.predict(x_test)
preds[preds>=0.5] = 1
preds[preds<0.5] = 0

for index, pred in enumerate(preds):
    y_pred = [i for i, j in enumerate(pred) if j == 1]
    y_t = [i for i, j in enumerate(y_test[index]) if j == 1]
    print(y_pred)
    print(y_t)
    print('\n')

f = open('results.csv', 'w')
w = csv.writer(f, lineterminator='\n')
w.writerow(list(range(1,100)))
w.writerow(hist.history['val_loss'])
w.writerow(hist.history['val_binary_acc'])
w.writerow(hist.history['val_total_acc'])
w.writerow(hist.history['loss'])
w.writerow(hist.history['binary_acc'])
w.writerow(hist.history['total_acc'])
f.close()
