package com.hrms.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.request.EmpSalaryStruRequest;
import com.hrms.app.service.EmpSalrayStruServiceImpl;

@RestController
@RequestMapping("/salaryStru")

public class EmpSalaryStruContoller {

	@Autowired
	private EmpSalrayStruServiceImpl salService;

	// create employee salary structure method
	@PostMapping
	public ResponseEntity<?> createEmpSalaryStru(@RequestBody EmpSalaryStruRequest salReq) {
		System.out.println("in EmpSalaryStru controller");
		System.out.println(salService.addEmpSalaryStru(salReq));
		return ResponseEntity.status(HttpStatus.CREATED).body(salService.addEmpSalaryStru(salReq));
	}

	@GetMapping("/get")
	public ResponseEntity<?> getEmployeeStructbyId(@PathVariable String Id) {
		System.out.println("In get employee salary structure by id ");
		return ResponseEntity.ok(salService.getEmployeeSalStruct(Id));
	}
}
