package com.hrms.app.response;

import java.time.LocalDate;

import com.hrms.app.model.Employee;

import lombok.Data;

@Data
public class EmpSalaryStruDto {
	private double basicSalary;
	private double medicalAllowance; 
	private double conventionalAllowance; 
	private double professionTax;
	private double providuntFund;
	private double grossSalary;
	private double netSalary;
	private double tds; 
	private double hRA; 
	
	
//	private Employee emp; 
//	private String bankAccountId; 
//	private double basicSalary;
//	private double medicalAllowance; 
//	private double conventionalAllowance; 
//	private double Tds;
//	private double professionTax;
//	private double grossSalary;
//	private double netSalary;
//	private double providuntFund;
//	private boolean recordStatus; 
//	private double HRA;
}
