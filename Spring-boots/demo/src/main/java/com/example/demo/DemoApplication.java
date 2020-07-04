package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping ;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@RestController //respose like json
public class DemoApplication {
	public static String response = "rush" ;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@GetMapping("/hello") //class hello จะตรวจรับ param และดูว่า มีการส่งparam มาหรือไม่ในแท็ก name ถ้ามีก็ใช้ค่าดังกล่าวไปใส่ตัวแปร name ถ้าไม่มีก็ใช้ default ที่เป็นคำว่า world ไปใส่ตัวแปร name แทน 
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}
	@GetMapping("/rush")
	public String rush(@RequestParam( defaultValue = "World") String name) {
		return String.format("hi rush %s!", name);
	}
	@GetMapping("/helloworld")
	public String hello() {

		return "This is basic return Hello !";
	}
	@GetMapping("/normaljson")
	public String normaljson() {

		return "{\"success\":1,\"test\":2}";
	}

}
