package com.utilmodel.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Locale;

public class WebMvcConfigurer {
    @Configuration
    public class LocaleConfig implements org.springframework.web.servlet.config.annotation.WebMvcConfigurer {

        // 사용자의 Locale을 세션 또는 쿠키로 저장
        @Bean
        public LocaleResolver localeResolver() {
            SessionLocaleResolver slr = new SessionLocaleResolver();
            slr.setDefaultLocale(Locale.KOREAN); // 기본값은 한국어
            return slr;
        }

        // ?lang=ko 또는 ?lang=en으로 언어 변경을 허용하는 인터셉터
        @Bean
        public LocaleChangeInterceptor localeChangeInterceptor() {
            LocaleChangeInterceptor interceptor = new LocaleChangeInterceptor();
            interceptor.setParamName("lang"); // 기본값도 lang이지만 명시적으로 설정
            return interceptor;
        }

        // 인터셉터 등록
        @Override
        public void addInterceptors(InterceptorRegistry registry) {
            registry.addInterceptor(localeChangeInterceptor());
        }
    }

}
