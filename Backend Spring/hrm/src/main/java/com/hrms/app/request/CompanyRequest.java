package com.hrms.app.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CompanyRequest {
	
	@NotBlank(message = "Company Name can not be blank")
	private String companyName;
	
	@Pattern(regexp = "\\d{10}", message = "Company contact must be 10 digits")
	private String companyContact;
	
	@Email(message = "Invalid email format")
	private String companyEmail;
}
