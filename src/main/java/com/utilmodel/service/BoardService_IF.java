package com.utilmodel.service;

import com.utilmodel.VO.Test_boardVO;

import java.util.List;

public interface BoardService_IF {
    List<Test_boardVO> getAllBoard();
    List<Test_boardVO> getPageBoard(int pageNum, int numPerPage);
    int getTotalListCount();
}
