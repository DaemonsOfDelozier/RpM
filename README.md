# RpM
Main Repo for Routes per Mile

# Dependencies
First, download the latest version of npm and node. https://github.com/creationix/nvm is a good tool to manage this.
To install the rest of the dependencies, move into the static folder and run "npm install".

# To run
There are two parts to running the website.  For the back end, the server needs to run.  To do this move into the server folder and run app.py.  For the front end, the files need to be bundled by webpack.  To do this, move into the static folder and type "npm run watch".

# Tutorial
The following url is the website I used to help me set this up.  I didn't follow everything exactly because some of it is outdated, but if you wanna get a general idea of how it all fits together its a good guide. https://codeburst.io/creating-a-full-stack-web-application-with-python-npm-webpack-and-react-8925800503d9

# Testing
First, make sure behave and selenium are downloaded. Then make sure you have the right webdriver extension for chrome (that's the browser being called in the test files), here is a link: http://chromedriver.chromium.org/downloads. For the chromedriver, you will also need to include the chromedriver location in your PATH environment variable, here's a link that helped me with that: https://stackoverflow.com/questions/49788257/what-is-default-location-of-chromedriver-and-for-installing-chrome-on-windows. After all that is done just start the server manually, move into the tests folder(with a different terminal), and type "behave" to run the tests.
