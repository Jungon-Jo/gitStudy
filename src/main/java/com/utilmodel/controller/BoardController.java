package com.utilmodel.controller;

import com.utilmodel.service.BoardService_IF;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BoardController {

    @GetMapping("/board")
    public String getBoard(Model model) {

        System.out.println("debug_controller");
        return "test_board";
    }


}
