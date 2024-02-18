package com.hrms.app.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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
@Document(collection = "employees")
@ToString
public class Employee {
	//primary key 
	@Id
	private String empId;
	private String firstName; 
	private String MiddleName; 
	private String lastName; 
	private String gender;
	private LocalDate dob; 
	private LocalDate joiningDate;  
	// Reference to Department (one-to-many)
    @DBRef
    @Field("dept_id")
	private Department dept;  
    // Reference to Project (many-to-many)
    @DBRef
    private List<Project> projects;
	private String desig; 
	private String email; 
	private String contactNo; 
	private int noticePeriod; 
	private LocalDate lastWorkingDay;
	private boolean empStatus; 
	private String empAccesRole; 
	private int leaveBalance; 
	private String manager;
	private String userName;
	private String password;
	private LocalDateTime createdOn;
	private LocalDateTime updatedOn; 
	//private String recordStatus;

}
