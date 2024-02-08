package com.hrms.app.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

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
	private String projectId;
	// Reference to Company (one-to-many)
	@DBRef
	@Field("company_id")
	private Company company;
	private String projectTitle;
	private LocalDate startDate;
	private LocalDate endDate;
	private String recordStatus;
	private boolean isActive;
	private LocalDateTime createdOn;
	private LocalDateTime updatedOn;
	
}
