package com.hrms.app.service;

import com.hrms.app.request.EMpSalaryStruRequest;
import com.hrms.app.response.EmpSalaryStruDto;

public interface IEmpSalaryStruService {
	
	EmpSalaryStruDto addEmpSalaryStru(EMpSalaryStruRequest salaryReq);
}
