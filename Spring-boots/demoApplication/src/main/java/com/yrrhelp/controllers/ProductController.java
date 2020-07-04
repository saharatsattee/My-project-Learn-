package com.yrrhelp.controllers;

import java.util.List;

import com.yrrhelp.models.Product;
import com.yrrhelp.services.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rush")
public class ProductController {

      	@Autowired
		ProductService productService;

      	@GetMapping("/products")  
	  	public List<Product> getAllProducts(){
		  	return productService.getAllProducts();
	  	}

		@GetMapping("/products/{id}") // can put idNumber to Enpoint 
		public ResponseEntity<Product> getProductById(@PathVariable("id") String productId) {
  			Product product = productService.getProductById(productId);

  			if(product == null ){
	  			return  new ResponseEntity<Product> (HttpStatus.NOT_FOUND);
			}
  
  			return  new ResponseEntity<Product> (product,HttpStatus.OK);
		}

	  	@GetMapping("/productParam")  //use " ?id=124 " in endpoint
	  	public Product getProductById2(@RequestParam(value = "id") String productId) {
		  return productService.getProductById(productId);
		}
	 
		@PostMapping("product/add")
		@ResponseStatus(HttpStatus.CREATED)
		public Product addProduct(@RequestBody Product newProduct) {

      		return productService.addProduct(newProduct);
		}
	  
		@PostMapping("product/statustest") //เป็นรูปแบบการ return http status คร่าวๆ
		public ResponseEntity <Product> statustest(@RequestBody Product newProduct) {
			if(newProduct.getName().equals("iPHone11")){
				return  new ResponseEntity<Product> (newProduct,HttpStatus.OK);
			}
			return  new ResponseEntity ("Not Found",HttpStatus.NOT_FOUND); //ลบ<Product>ออก หากต้องการส่ง message กลับไปให้ user  
      		
		}
}
