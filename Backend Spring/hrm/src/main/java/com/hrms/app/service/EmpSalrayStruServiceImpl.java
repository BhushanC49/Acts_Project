package com.hrms.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.model.EmpSalaryStructure;
import com.hrms.app.repo.IEmpSalaryStruReository;
import com.hrms.app.request.EmpSalaryStruRequest;
import com.hrms.app.response.EmpSalaryStruDto;


@Service
public class EmpSalrayStruServiceImpl {
	
	@Autowired 
	IEmpSalaryStruReository salRepo; 
	
	@Autowired 
	ModelMapper mapper;
	
	
	public EmpSalaryStruDto addEmpSalaryStru(EmpSalaryStruRequest salaryReq) {
		
		EmpSalaryStructure empSalStru=mapper.map(salaryReq, EmpSalaryStructure.class); 
		salRepo.save(empSalStru);
		return mapper.map(empSalStru, EmpSalaryStruDto.class);
	}

}
