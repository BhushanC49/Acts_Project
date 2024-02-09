package com.hrms.app.model;

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
@Document(collection = "departments")
@ToString
public class Department {
	// primary key
	@Id
	private String deptId;
	private String deptName;
	// Reference to Company (one-to-many)
	@DBRef
	@Field("company_id")
	private Company company;
	private String deptHeadEmpId;
	private String recordStatus;
	private boolean isActive;
	private LocalDateTime createdOn;
	private LocalDateTime updatedOn;
}
