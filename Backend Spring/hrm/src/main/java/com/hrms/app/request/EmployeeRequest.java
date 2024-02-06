package com.hrms.app.request;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import com.hrms.app.model.Designation;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter 
@Setter 
@ToString
public class EmployeeRequest {
	@NotBlank(message = "Id can not be blank")
	private String empId; 
	@NotBlank(message = "First Name can not be blank")
	private String firstName; 
	private String MiddleName; 
	private String lastName; 
	private String gender;
	private LocalDate dob; 
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate joiningDate; 
	private Designation desig;
	@Email
	private String email;  
	private String contactNo; 
	@NotBlank(message = "username can not be blank")
	private String userName; 
	@NotBlank(message = "password can not be blank")
	private String password;  
	@NotBlank(message = "confirm password field can not be blank")
	private String confirmPassword;
	//private LocalDateTime createdOn;
	//private LocalDateTime updatedOn; 
}
