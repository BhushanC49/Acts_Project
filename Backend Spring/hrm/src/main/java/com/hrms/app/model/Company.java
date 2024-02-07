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
	private String companyId;
	private String companyName;
	private String companyContact;
	private String companyEmail;
	private String recordStatus;
}
