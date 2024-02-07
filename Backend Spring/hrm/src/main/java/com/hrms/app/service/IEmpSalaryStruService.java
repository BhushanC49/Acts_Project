package com.hrms.app.service;

import com.hrms.app.request.EmpSalaryStruRequest;
import com.hrms.app.response.EmpSalaryStruDto;

public interface IEmpSalaryStruService {
	
	EmpSalaryStruDto addEmpSalaryStru(EmpSalaryStruRequest salaryReq);
}
