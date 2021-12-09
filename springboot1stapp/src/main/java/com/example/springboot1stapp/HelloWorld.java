package com.example.springboot1stapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {

    @GetMapping("/helloworld")
    public String helloworld(){
        return "Hello,World!";
    }
}
