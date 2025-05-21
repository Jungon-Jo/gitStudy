package com.utilmodel.service;

import com.utilmodel.VO.Test_boardVO;
import com.utilmodel.mapper.Test_boardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService_IM implements BoardService_IF {

    @Autowired
    private Test_boardMapper test_boardMapper;

    public List<Test_boardVO> getAllBoard() {
        return this.test_boardMapper.selectAllBoard();
    }

    public List<Test_boardVO> getPageBoard(int pageNum, int numPerPage) {
        int startNum = (pageNum - 1) * numPerPage;
        return this.test_boardMapper.selectPageBoard(startNum, numPerPage);
    }

    public int getTotalListCount() {
        return this.test_boardMapper.selectAllListCount();
    }
//    public int getPageNum(int numPerPage) {
//        int totalListNum = test_boardMapper.selectAllBoard().size();
//        Integer pageNum = null;
//        if(totalListNum < numPerPage) {
//            pageNum = 1;
//            System.out.println(pageNum);
//            return pageNum;
//        } else {
//            pageNum = totalListNum % numPerPage;
//            if(pageNum == 0) {
//                pageNum = totalListNum / numPerPage;
//                System.out.println(pageNum);
//                return pageNum;
//            } else {
//                pageNum = totalListNum / numPerPage + 1;
//                System.out.println(pageNum);
//                return pageNum + 1;
//            }
//        }
//    }
}
