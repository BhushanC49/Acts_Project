package com.hrms.app.response;

import java.time.LocalDate;

import com.hrms.app.model.Department;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter 
@Setter 
@ToString
public class EmployeeDto {
	
	private String empId; 
	private String firstName; 
	private String middleName; 
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
	private Department dept;
	private int leaveBalance;
}
