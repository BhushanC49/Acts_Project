package com.hrms.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.model.Company;
import com.hrms.app.response.ProjectDTO;
import com.hrms.app.service.CompanyServiceImpl;

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
	
}
