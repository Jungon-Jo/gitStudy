package com.utilmodel.controller;

import com.utilmodel.service.BoardService_IF;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BoardController {
    @Autowired
    private BoardService_IF boardService;

    @GetMapping("/board")
    public String getBoard(Model model) {
//        List<Test_boardVO> test_boardVOList = boardService.getAllBoard();
//        model.addAttribute("boardList", test_boardVOList);
        System.out.println("debug_controller");
        return "test_board";
    }


}
