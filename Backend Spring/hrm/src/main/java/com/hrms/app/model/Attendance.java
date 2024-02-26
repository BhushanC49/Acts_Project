package com.hrms.app.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collation = "attendance")
public class Attendance {

	@Id
	private String attendanceId;

//	@DBRef
	private String empid;

	private LocalDate date;
	
	private boolean isPresent;

}
