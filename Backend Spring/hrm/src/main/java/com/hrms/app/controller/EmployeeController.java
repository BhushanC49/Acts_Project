package com.hrms.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.hrms.app.request.EmployeeRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.EmployeeDto;
import com.hrms.app.service.EmployeeServiceImpl;


import jakarta.validation.Valid;

@RestController 
@RequestMapping("/employee")

public class EmployeeController {
	
	//service layer dependency injection(DI) 
	@Autowired
	private EmployeeServiceImpl empService;  
	
	//endpoint for adding new employee details
	@PostMapping
	public ResponseEntity<?> addEmpDetails(@RequestBody @Valid EmployeeRequest empReq )
	{
			//calling EmpService method for adding employee  
			System.out.println(empReq);
			return new ResponseEntity<>(empService.addEmployee(empReq),HttpStatus.CREATED);
	} 
	@GetMapping("/{empId}")
	public ResponseEntity<?> getEmployee(@PathVariable String empId){
		//call service method for fetching an employee info 
		return ResponseEntity.ok(empService.getEmployee(empId));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllEmployeesPaginated(@RequestParam(defaultValue = "0", required = false) int pageNumber,
			@RequestParam(defaultValue = "10", required = false) int pageSize){
		System.out.println("in get all employees " +pageNumber + "page size "+pageSize); 
		List<EmployeeDto> list=empService.getAllEmployees(pageNumber, pageSize); 
		if(list.isEmpty())
		{
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} 
		return ResponseEntity.ok(list);
	}
	
	@PutMapping("/{empId}")
	public ResponseEntity<?> updateEmployee(@PathVariable String empId,@RequestBody @Valid EmployeeRequest empReq){
		//call update employee method to update emoloyee 
		System.out.println("in update employee method");
		return ResponseEntity.ok(empService.updateEmployee(empReq));
	}
	
	@DeleteMapping("/{empId}")
	public ResponseEntity<?> removeEmployee(@PathVariable String empId){
		System.out.println("in delete employee method "); 
		
		return ResponseEntity.ok(empService.removeEmployee(empId));
	} 
	
	@GetMapping("/manager")
	public ResponseEntity<?> getAllManagers(){
		List<EmployeeDto> empDtolist=empService.getAllMangers(); 
		System.out.println(empDtolist);
		return ResponseEntity.ok(empDtolist);
	}
}
