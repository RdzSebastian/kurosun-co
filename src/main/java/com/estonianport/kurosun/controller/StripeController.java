package com.estonianport.kurosun.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StripeController {

	@Value("${stripe.apikey}")
	String stripeKey;
	
	@RequestMapping("/")
	public String index() {
		return "hello " + stripeKey;
	}
	
}
