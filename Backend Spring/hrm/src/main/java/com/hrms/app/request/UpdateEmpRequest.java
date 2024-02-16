package com.hrms.app.request;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.ToString;

@Data 
@ToString
public class UpdateEmpRequest {
	@NotBlank(message = "First Name can not be blank")
	private String firstName; 
	private String middleName; 
	private String lastName; 
	private String gender;
	private LocalDate dob; 
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate joiningDate; 
	private String desig;
	@Email
	private String email;  
	private String contactNo; 
	private String dept;
	private String manager; 
	private List<String> projects;
}
