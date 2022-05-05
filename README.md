# Smart-Location-Aware-E-Commerce-System-Using-Microservices-Architecture
Final Year School Project By Phakisi K.S and Leballo R.

For Authentication HS512 was used to sign JsonWebTokens
cryptojs is used to encrypt passwords then store them in the database
it used AES. Also used a secret key as salt

For API gateway, Netflix Zuul was used but provided the following error:
```
org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'scopedTarget.eurekaClient' defined in class path resource [org/springframework/cloud/netflix/eureka/EurekaClientAutoConfiguration$RefreshableEurekaClientConfiguration.class]: Bean instantiation via factory method failed; nested exception is org.springframework.beans.BeanInstantiationException: Failed to instantiate [com.netflix.discovery.EurekaClient]: Factory method 'eurekaClient' threw exception; nested exception is java.lang.RuntimeException: Failed to initialize DiscoveryClient!
```

The error persisted even after multiple solutions were tried.

Spring cloud API gateway was tried next and it provided the following error that persisted through multiple solutions

```
Access to XMLHttpRequest at 'http://localhost:8080/api/auth/signin' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

Create a .env file in all microservices containing:
```
MONGO_URL = mongo atlas url to database
PORT = port number of each microservice
PASS_SEC = any secret key for encrypting password
JWT_SEC = any secret key for generating JsonWebToken
```