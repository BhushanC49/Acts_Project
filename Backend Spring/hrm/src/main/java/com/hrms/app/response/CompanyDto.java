package com.hrms.app.response;

import lombok.Data;
import lombok.ToString;

@Data 
@ToString
public class CompanyDto {
	private String companyId;
	private String companyName;
	private String companyContact;
	private String companyEmail;
	private boolean isActive;
}
