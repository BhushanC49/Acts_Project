package com.hrms.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.hrms.app.request.EmployeeRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.service.IEmployeeService;

import jakarta.validation.Valid;

@RestController 
@RequestMapping("/Employee")
@CrossOrigin(origins = "")
public class EmployeeController {
	
	//service layer dependency injection(DI) 
	@Autowired
	private IEmployeeService empService;  
	
	//endpoint for adding new employee details
	@PostMapping
	public ResponseEntity<?> addEmpDetails(@RequestBody @Valid EmployeeRequest empReq )
	{
		try {
			//calling EmpService method for adding employee 
			return new ResponseEntity<>(empService.addEmployee(empReq),HttpStatus.CREATED);
		}
		catch(RuntimeException e)
		{
			System.out.println("err in controller "+e);
			//return err mesg wrapped in DTO : ApiResp
			return  ResponseEntity
					.status(HttpStatus.NOT_FOUND)
					.body(new ApiResponse(e.getMessage()));
		}
	} 
	
	
	
}
