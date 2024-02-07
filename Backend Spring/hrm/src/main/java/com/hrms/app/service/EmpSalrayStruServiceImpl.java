package com.hrms.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.hrms.app.model.EmpSalaryStru;
import com.hrms.app.repo.IEmpSalaryStruReository;
import com.hrms.app.request.EMpSalaryStruRequest;
import com.hrms.app.response.EmpSalaryStruDto;

public class EmpSalrayStruServiceImpl implements IEmpSalaryStruService {
	
	@Autowired 
	IEmpSalaryStruReository salRepo; 
	
	@Autowired 
	ModelMapper mapper;
	
	
	@Override
	public EmpSalaryStruDto addEmpSalaryStru(EMpSalaryStruRequest salaryReq) {
		
		EmpSalaryStru empSalStru=mapper.map(salaryReq, EmpSalaryStru.class); 
		EmpSalaryStru persistentSalStru=salRepo.save(empSalStru);
		return mapper.map(persistentSalStru, EmpSalaryStruDto.class);
	}

}
