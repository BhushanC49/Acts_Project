package com.hrms.app.service;

import com.hrms.app.request.EmployeeRequest;
import com.hrms.app.response.EmployeeDto;

public interface IEmployeeService {
	EmployeeDto addEmployee(EmployeeRequest empReq); 
	
}
