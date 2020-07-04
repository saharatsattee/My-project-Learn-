package com.yrrhelp.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HomeController {

	@GetMapping("/")
	public String showHomePage() {
		
		System.out.println("In Home Page");
		
		return "home";
	}
}
