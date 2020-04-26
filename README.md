# webdriverIo-typescript-mocha

## Introduction
 
   This UI acceptance testing framework created using the following tools & libraries:
   
     - webdriverio
     - mocha
     - chai
     - typescript
     - allure report
     - docker
     
## Run tests using docker
   Require docker to be pre-installed. Please install docker from the following link https://www.docker.com/products/docker-desktop
   1. Git clone the project
   2. Navigate to the project folder and execute ``docker build -t=wdio-ui-tests .``
   3. Once the image is built, then execute 
      ``docker-compose up --abort-on-container-exit --exit-code-from webdriverio-ui-tests``
      
## Run tests in your machine

   Require npm & yarn to be pre-installed.
   1. Git clone the project
   2. Navigate to project folder and execute ``yarn install``
   3. After installation of dependencies, then execute ``yarn test``
   4. To generate reports afte test, execute ``yarn report``
    
## Test automation infrastructure
   Web UI tests are designed to run in a disposabled selenium grid infrastructure within a containerised environment, this setup would
   remove the OS dependency issues teams face when running selenium tests.
