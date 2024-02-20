package com.hrms.app.request;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter 
@Setter 
@ToString
public class EmployeeRequest {
	
	@NotBlank(message = "First Name can not be blank")
	private String firstName; 
	private String middleName; 
	private String lastName; 
	private String gender;
	private LocalDate dob; 
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate joiningDate; 
	private String desig;
	private String email;  
	private String contactNo; 
	@NotBlank(message = "department can not be blank")
	private String dept;
	private String manager;
	private String password;  
	@NotBlank(message = "confirm password field can not be blank")
	private String confirmPassword;
	//private LocalDateTime createdOn;
	//private LocalDateTime updatedOn; 
}
