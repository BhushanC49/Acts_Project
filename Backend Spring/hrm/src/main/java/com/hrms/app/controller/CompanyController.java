package com.hrms.app.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hrms.app.request.CompanyRequest;
import com.hrms.app.response.CompanyDto;
import com.hrms.app.service.CompanyServiceImpl;
;

@RestController
@RequestMapping("/api/companies")

public class CompanyController {
	
	@Autowired
	private CompanyServiceImpl companyService;
	//Need to change (MAke Dto Request)
	 @GetMapping
    public ResponseEntity<?> getAllCompanies() { 
        return ResponseEntity.ok(companyService.getAllCompanies());
    }
	 
	 @PostMapping("/add")
	    public ResponseEntity<CompanyDto> addCompany(@RequestBody CompanyRequest companyRequest) {
	        CompanyDto companyDto = companyService.addCompany(companyRequest);
	        return new ResponseEntity<>(companyDto, HttpStatus.CREATED);
	    }
	
}
