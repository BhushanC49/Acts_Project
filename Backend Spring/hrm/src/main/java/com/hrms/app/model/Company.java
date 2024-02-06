package com.hrms.app.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

//to generate getter and setters 
@Data  
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "companies") 
@ToString
public class Company {
	// primary key
	@Id
	private String company_id;
	private String company_name;
	private String company_contact;
	private String company_email;
	private String Record_status;
}
