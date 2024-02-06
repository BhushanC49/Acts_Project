package com.hrms.app.model;

import org.springframework.data.annotation.Id;

public class Designation {

	// primary key
	@Id
	private String desig_id;
	private String desig_title;
	private String company_id;
	private String desig_level;
	private String Record_status;
}
