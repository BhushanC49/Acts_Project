package com.hrms.app.response;

import java.time.LocalDate;

import com.hrms.app.model.Designation;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter 
@Setter 
@ToString
public class EmployeeDto {
	
	private String empId; 
	private String firstName; 
	private String MiddleName; 
	private String lastName; 
	private String gender;
	private LocalDate dob; 
	private LocalDate joiningDate; 
	private String desig; 
	private String email; 
	private String contactNo; 
	private String userName;
	private String empStatus; 
	private String empAccesRole; 
}
