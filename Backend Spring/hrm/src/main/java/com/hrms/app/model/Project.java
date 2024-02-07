package com.hrms.app.model;

import java.time.LocalDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

//to generate getter and setters 
@Data  
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "projects") 
@ToString
public class Project {
	// primary key
	@Id
	private String project_id;
	// Reference to Company (one-to-many)
	@DBRef
	@Field("company_id")
	private Company company;
	private String project_title;
	private LocalDate start_date;
	private LocalDate end_Date;
	private String record_status;
}
