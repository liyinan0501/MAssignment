# Mentura  - Full Stack Developer Case Study

This repo is a boilerplate for interview case study.

In Mentura we manage and process big datasets to create meaningful analytics and actionable insights to our users. Location data is in the heart of most of our day to day coding. We help our customers to understand "when" and "where" dimensions of their data on top of "what".

run `npm start` to start development.

## Assignment

 Create an api to fetch location based data. There are many different ways to complete this task, Your approach will make the difference!. Feel free to make use of as many npm packages as needed.
 
 There are 2 datasets: 
 Please unzip `datasets.zip` to access them. Both dataset schemas are the same, which is `Measurement[]`. Type definition can be found under the Interfaces folder. The only difference is one of them has 1M records while the other one has 10M records.

 1) data-1M.json --> There are 1M records in this json. Your code should be able to digest all of it as a minimum requirement.
 2) data-10M.json(Don't open, Your computer might crash) --> There are 10M records in this json. Choose this dataset if you're up for a challenge!

### Minimum Requirements:  

  - Complete `get-data` route:
      Return data from the json file.

  - Complete `get-average` route:
      Return average of the requested property. Property name can be passed as a query or a path parameter. 
      Example: `get-average/scoreA` should return the average of scoreA.

  - Complete `get-rank` route:
      Return device name of top x records sorted by requested property name.
      Example: `get-rank?param=scoreA&itemNo=2` should return device name 2 of the items that have highest scoreA values.

### Bonuses:
  - Use data-10M.json as data source,
  - Sort data by date in `get-data` route,
  - Implement filtering logic for all routes. Which can filter by queried date and deviceType


### Delivery:
  - Please share your solution via a zipped folder or as a repo under one of the cloud git services.