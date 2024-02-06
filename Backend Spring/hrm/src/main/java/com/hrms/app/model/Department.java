package com.hrms.app.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Field;

public class Department {
	//primary key 
	@Id
	 private String dept_id;
	 private String dept_name;
	// Reference to Company (one-to-many)
	 @DBRef
	 @Field("company_id")
	 private Company company;
	 private String depthead_empid;
	 private String Record_status;
}
