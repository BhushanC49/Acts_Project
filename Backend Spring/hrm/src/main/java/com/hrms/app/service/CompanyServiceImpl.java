package com.hrms.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.model.Company;
import com.hrms.app.repo.IcompanyRepository;
@Service
public class CompanyServiceImpl{
     @Autowired
     private IcompanyRepository icompanyRepository;
     
     public List<Company> getAllCompanies(){
    	 return icompanyRepository.findAll();
     }
     
}
