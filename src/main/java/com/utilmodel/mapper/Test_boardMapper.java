package com.utilmodel.mapper;

import com.utilmodel.VO.Test_boardVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Test_boardMapper {
    List<Test_boardVO> selectAllBoard();
    List<Test_boardVO> selectPageBoard(int startNum, int pageSize);
    int selectAllListCount();
}
