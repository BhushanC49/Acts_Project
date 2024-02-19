package com.hrms.app.request;

import java.time.LocalDate;

import lombok.Data;
import lombok.ToString;
@Data 
@ToString
public class EmpSalaryStruRequest {
	
	private String salId;
	private String empId;
	private String bankAccountId; 
	private double basicSalary;
	private double medicalAllowance; 
	private double conventionalAllowance; 
	private double professionTax; 
	private double providuntFund;
	private double tds; 
	private double hra;
	private double grossSalary;
	private double netSalary;
	
	
}
