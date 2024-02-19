package com.hrms.app.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
@ToString 
@Document(collection = "salary_structure")
public class EmpSalaryStructure {	
	@Id 
	private String salId;  
	@DBRef 
	@Field("emp_id")
	private Employee emp; 
	private String bankAccountId; 
	private double basicSalary;
	private double medicalAllowance; 
	private double conventionalAllowance; 
	private double tds;
	private double professionTax;
	private double grossSalary;
	private double netSalary;
	private double providuntFund;
	private boolean recordStatus; 
	private double hra;
	
}
