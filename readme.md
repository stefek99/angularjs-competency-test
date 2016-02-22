
# Requirements

In the assignment there were 6 points:

1. nice
2. easy
3. pleasant
4. relaxing
5. effortless
6. quite difficult

Majority of the time I spent on **6** and  **0** - how to structure the app? Whether to use generators, seed projects, build systems... In the end decided to write all of the code by hand - the purpose of this app is **Competency Test** and in my experience it will be much easier to navigate.

# Explanation

It's really straightforward. No shenanigans.

> In the end decided to write all of the code by hand.

In that way the code that is there - it is probably the MVP code that works.

Some notable points:

* Custom Angular.js validation as required
* It runs on Heroku and uses MongoLab
* Writing persistence tests for Mongo - quite challenging - recently I've been specialising mostly in front-end and UI

# Running the app

1. clone the repo
2. npm install
3. node app.js
4. localhost:3000

## Requirements

* MongoDB installed and running

# Running the tests

1. node.js tests are run via ```mocha``` *(you may want to install it globally)*
2. front-end tests: ```CountriesService-tests.html``` *(just double click and it should work)*

Note: no automated test runner as of now  - see [wiki](https://github.com/stefek99/angularjs-competency-test/wiki) for details...
