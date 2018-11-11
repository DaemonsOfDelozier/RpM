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
Testing is now done entirely through Travis-CI and SauceLabs. Right now the only branch travis is tracking is the master branch so any pull request or commit to master will trigger a travis build. If you want travis to track a branch you're currently working on, go into the .travis.yml file and add your branch right below the "- master" line. Right now SauceLabs is preventing me from creating a testing account for the company (I have to log in with my github, I contacted them about the issue) so if anyone wants to see the tests running through SauceLabs remote browser just let me know and I can log into my account and show you.
