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
@Document(collection = "designations")
@ToString
public class DesignationTest {

	// primary key
	@Id
	private String desiginationId;
	private String desiginationTitle;
	// Reference to Company (one-to-many)
	@DBRef
	@Field("company_id")
	private Company company;
	private String desiginationLevel;
	private String recordStatus;
	private boolean isActive;
	private LocalDateTime createdOn;
	private LocalDateTime updatedOn;
}
