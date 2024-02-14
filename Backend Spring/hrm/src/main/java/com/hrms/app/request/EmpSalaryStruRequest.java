package com.hrms.app.request;

import java.time.LocalDate;

import lombok.Data;
import lombok.ToString;
@Data 
@ToString
public class EmpSalaryStruRequest {
	private String empId;
	private String bankAccId; 
	private double basicSalary;
	private double medicalAllowance; 
	private double conventionalAllowance; 
	private double deduction;
	private double iTax;
	private double grossSalary;
	private double netSalary;
	private LocalDate effectiveFromDate;
}
