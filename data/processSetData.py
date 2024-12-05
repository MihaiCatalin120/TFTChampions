import csv
import pandas as pd
import numpy as np
import re

def extract_numbers(text):
    return re.findall(r'-?\d+\.?\d*', text)

def find_first_number(numbers):
    try:
        return float(next(iter(numbers)))
    except ValueError:
        return None

print("Starting data processing...\n")
for setIndex in np.arange(1, 13, 0.5):
    if setIndex % 1 == 0:
        setIndex = int(setIndex)

    try:
        df = pd.read_csv(f'raw/set{setIndex}.csv')
    except FileNotFoundError as e:
        continue

    #merge trait columns
    columns_to_merge = ['origin', 'class']
    if 'class_extra' in df.columns:
        columns_to_merge.append('class_extra')
    df['traits'] = df[columns_to_merge].apply(lambda x: ','.join(map(str, x)), axis=1)

    #remove nan values resulted from missing extra trait
    values = df['traits'].str.split(',').tolist()
    values_modified = [[item for item in sublist if item != 'nan'] for sublist in values]
    df['traits'] = values_modified

    #process set column
    df['set'] = df['set'].apply(lambda x: find_first_number(extract_numbers(x)) or x)
    df['set'] = df['set'].apply(lambda x: int(x) if x % 1 == 0 else x)

    df.drop(columns=columns_to_merge, inplace=True)

    df.to_csv(f'processed/set{setIndex}.csv', index=False)
    print(df)
