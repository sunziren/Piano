package com.sunziren.piano.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PianoController {

    @GetMapping("/index")
    public String getIndexPage(){
        return "/piano/index";
    }

    @GetMapping("/test")
    public String getTestPage(){
        return "/piano/test";
    }

}
