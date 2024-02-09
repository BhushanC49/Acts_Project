package com.hrms.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.service.CompanyServiceImpl;

@RestController
@RequestMapping("/Company")
public class CompanyController {
	
	private CompanyServiceImpl companyService;
	
}
