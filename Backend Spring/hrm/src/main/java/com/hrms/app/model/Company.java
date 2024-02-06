package com.hrms.app.model;

import org.springframework.data.annotation.Id;

public class Company {
	// primary key
	@Id
	private String company_id;
	private String company_name;
	private String company_contact;
	private String company_email;
	private String Record_status;
}
