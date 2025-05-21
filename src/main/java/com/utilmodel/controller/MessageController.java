package com.utilmodel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.*;

@Controller
public class MessageController {

    @Autowired
    private MessageSource messageSource;

    @GetMapping("/msg")
    public String getAllMessages(Locale locale, Model model) {
        List<String> keys = Arrays.asList(
                "error.bad_request",
                "error.unauthorized",
                "error.not_found"
        );

        Map<String, String> result = new HashMap<>();
        for (String key : keys) {
            result.put(key, messageSource.getMessage(key, null, locale));
        }

        model.addAttribute("messages", result);

        return "test_messages";
    }

}
