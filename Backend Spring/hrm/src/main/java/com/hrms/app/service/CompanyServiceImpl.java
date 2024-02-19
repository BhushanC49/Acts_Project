package com.hrms.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.model.Company;
import com.hrms.app.model.Employee;
import com.hrms.app.repo.IcompanyRepository;
import com.hrms.app.request.CompanyRequest;
import com.hrms.app.request.EmployeeRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.CompanyDto;
import com.hrms.app.response.EmployeeDto;
@Service
public class CompanyServiceImpl{
     @Autowired
     private IcompanyRepository icompanyRepository;
     
     @Autowired
 	 private ModelMapper mapper;
     
     public List<CompanyDto> getAllCompanies(){ 
    	 List<Company> companyList=icompanyRepository.findAll();
    	 return companyList.stream().map(comp -> mapper.map(comp, CompanyDto.class)).collect(Collectors.toList());
     }
     
     public CompanyDto addCompany(CompanyRequest companyRequest) {
    	 
    	 
		Company company = mapper.map(companyRequest, Company.class);
         company.setCreatedOn(LocalDateTime.now());
         company.setUpdatedOn(LocalDateTime.now());
         company.setRecordStatus("Active");
         Company savedCompany = icompanyRepository.save(company);
         return mapper.map(savedCompany, CompanyDto.class);
     }
    
     public ApiResponse deleteCompany(String companyId) {
    	 icompanyRepository.deleteById(companyId);
    	 return new ApiResponse("Company Details Deleted");
     }

     public CompanyDto updateCompany(CompanyRequest compReq) {
        Company oldCompany = icompanyRepository.findById(compReq.getCompanyId()).orElseThrow();
       
        oldCompany = mapper.map(compReq, Company.class);
        oldCompany.setUpdatedOn(LocalDateTime.now());
        icompanyRepository.save(oldCompany);
        return mapper.map(oldCompany, CompanyDto.class);
     }
  
     public CompanyDto getCompany(String companyId) {
 		// get Employee by using empId
 		Company company = icompanyRepository.findById(companyId).orElseThrow(() -> new RuntimeException("Invalid company ID!!!"));
 		return mapper.map(company, CompanyDto.class);
 	}
     
     
     }

    
 
