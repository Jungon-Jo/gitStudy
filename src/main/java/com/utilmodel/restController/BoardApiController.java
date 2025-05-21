package com.utilmodel.restController;

import com.utilmodel.VO.Test_boardVO;
import com.utilmodel.service.BoardService_IF;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BoardApiController {

    @Autowired
    private BoardService_IF boardService;

    @GetMapping("/pagingBoard")
    public List<Test_boardVO> getPagingBoard(@RequestParam int pageNum, @RequestParam int numPerPage) {
        System.out.println("debug_pagingBoard");
        return boardService.getPageBoard(pageNum, numPerPage);
    }

    @GetMapping("/totalListCount")
    public int getTotalCount(@RequestParam int numPerPage) {
        int totalPage = boardService.getTotalListCount()/numPerPage;
        int restPage = boardService.getTotalListCount()%numPerPage;
        if(restPage==0) {
            System.out.println("debug_totalListCount_0");
            return totalPage;
        } else {
            System.out.println("debug_totalListCount_1");
            return totalPage + 1;
        }
    }
}

