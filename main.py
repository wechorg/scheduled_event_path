import json
import os


with open(os.environ["GITHUB_EVENT_PATH"], 'r') as file:
    my_json = json.load(file)
    print(my_json)
