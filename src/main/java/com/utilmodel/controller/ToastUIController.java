package com.utilmodel.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ToastUIController {

    @GetMapping("/toast")
    public String getBoard(Model model) {
        System.out.println("debug_controller");
        return "test_toastUI";
    }


}
