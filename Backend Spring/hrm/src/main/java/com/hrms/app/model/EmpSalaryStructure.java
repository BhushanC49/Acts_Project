package com.hrms.app.model;

import java.time.LocalDate;

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
	private String bankAccId; 
	private double basicSalary;
	private double medicalAllowance; 
	private double conventionalAllowance; 
	private double deduction;
	private double iTax;
	private double grossSalary;
	private double netSalary;
	private LocalDate effectiveFromDate;
	private String recordStatus;
	
}
