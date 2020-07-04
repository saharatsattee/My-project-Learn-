package com.example.demo;

public class Greeting {

	private  long id;
	private final String content;
	private final String testdata ;



	public Greeting( long id, String content , String testdata ) {
		this.id = id;
		this.content = content;
		this.testdata = testdata ; 

	}

	public void setID(long id) { 
		this.id = id ;
	}

	public long getId() { 
		return id;
	}

	public String getContent() { 
		return content;
	}

	public String getTestdata() { 
		return testdata;
	}
	
}