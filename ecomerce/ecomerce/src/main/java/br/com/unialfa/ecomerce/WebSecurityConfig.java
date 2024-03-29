package br.com.unialfa.ecomerce;

import org.springframework.context.annotation.Bean;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.web.cors.CorsConfiguration;

import org.springframework.web.cors.CorsConfigurationSource;

import org.springframework.web.cors.UrlBasedCorsConfigurationSource;



import java.util.Arrays;


@EnableWebSecurity

public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override

    protected void configure(HttpSecurity http) throws Exception {

        http

                // by default uses a Bean by the name of corsConfigurationSource

                .cors().and().headers().disable().cors().and().csrf().disable();

    }



    @Bean

    CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(Arrays.asList("*"));

        configuration.setAllowedMethods(Arrays.asList("GET","POST","PUT", "DELETE","OPTIONS"));

        configuration.addAllowedOrigin("*");

        configuration.addAllowedHeader("*");

        configuration.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", configuration);

        return source;

    }

}