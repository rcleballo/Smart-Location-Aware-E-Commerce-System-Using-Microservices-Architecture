# Smart-Location-Aware-E-Commerce-System-Using-Microservices-Architecture

## Description

This repository contains a fourth year project developed by Mr Reatile Leballo and I at National University of Lesotho. We explore microservices architecture by developing an ecommerce system that provides customers with locations of nearby physical stores with respect to the customer's location and provide recommended products based on what the recommendation AI recommends.

## Usage

### Installing

In order to use this makefile you will need to make sure that the following
dependencies are installed on your system:
  - Nodejs
  - npm
  - Intellij IDEA

### Setup the project

Create a .env file in all microservices containing:

```env
MONGO_URL = mongo atlas url to database
PORT = port number of each microservice
PASS_SEC = any secret key for encrypting password
JWT_SEC = any secret key for generating JsonWebToken
```

Run the project:
Navigate to Smart-Location-Aware-E-Commerce-System-Using-Microservices-Architecture/admin/

```
npm install
npm start
```

Navigate to Smart-Location-Aware-E-Commerce-System-Using-Microservices-Architecture/frontend/

```
npm install
npm start
```

Navigate to Smart-Location-Aware-E-Commerce-System-Using-Microservices-Architecture/backend/

Run the Discover-Server in intellij
Then proceed to run API-Gateway-Server

for remaining each microservice's root folder, do:

```
npm install
nodemon index.js
```
