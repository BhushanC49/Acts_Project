package com.hrms.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.repo.IEmployeeRepository;
import com.hrms.app.request.EmployeeRequest;
import com.hrms.app.response.EmployeeDto;

@Service
public class EmployeeServiceImpl implements IEmployeeService {
	@Autowired 
	private IEmployeeRepository empRepo;

	@Override
	public EmployeeDto addEmployee(EmployeeRequest empReq) {
		//validate password and confirm password  
		if(empReq.getConfirmPassword().equals(empReq.getPassword()))
		{
			
		} 
		else {
			
		}
		return null;
	} 
	
	
	
}
