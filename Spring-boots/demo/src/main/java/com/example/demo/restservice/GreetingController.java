package com.example.demo;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping ;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController //it means that return data type JSON 
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();
	private static String TestData = "text_Test" ;


	@GetMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format(template, name), TestData);
	}

	@PostMapping("/postgreeting")
	public Greeting postgreeting(@RequestBody Greeting greeting) {

		return new Greeting(greeting.getId(), greeting.getContent(),greeting.getTestdata());
	}
	@PostMapping("/longid")
	public Greeting longid(@RequestBody Greeting greeting) {
		long test = 5 ; 
		long id = greeting.getId();
		long ans = test+id ;
		greeting.setID(ans);
		System.out.println(ans);
		//หรือใช้ค่า ans ไปส่งออกในตำแหน่ง id เลยก็ได้เหมือนกัน 
		return new Greeting(greeting.getId(), greeting.getContent(),greeting.getTestdata());
	}
	
}