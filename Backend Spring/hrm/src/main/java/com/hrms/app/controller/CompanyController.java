package com.hrms.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	 
	 @PutMapping("/{companyId}")
		public ResponseEntity<?> updateCompany(@PathVariable String companyId,@RequestBody CompanyRequest companyRequest){
			System.out.println("in update Company method");
			return ResponseEntity.ok(companyService.updateCompany(companyRequest));
		}
		
		@DeleteMapping("/{companyId}")
		public ResponseEntity<?> removeCompany(@PathVariable String companyId){
			System.out.println("in delete company method "); 
			return ResponseEntity.ok(companyService.deleteCompany(companyId));
		} 
		@GetMapping("/{companyId}")
		public ResponseEntity<?> getCompany(@PathVariable String companyId){
			//call service method for fetching an employee info 
			return ResponseEntity.ok(companyService.getCompany(companyId));
		}
	
}
