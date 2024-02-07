package com.hrms.app.response;

import java.time.LocalDate;

public class EmpSalaryStruDto {
	private Integer salId;
	private String empId;
	private double basicSalary;
	private double medicalAllowance; 
	private double conventionalAllowance; 
	private double deduction;
	private double iTax;
	private double grossSalary;
	private double netSalary;
	private LocalDate effectiveFromDate;
}
