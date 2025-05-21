package com.utilmodel;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.utilmodel.mapper")
public class TestUtilModelApplication {

    public static void main(String[] args) {
        SpringApplication.run(TestUtilModelApplication.class, args);
    }

}
