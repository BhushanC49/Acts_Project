package com.hrms.app.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("onduty")
public class OnDuty {
	
	@Id
	private String onDutyId;
	private String empId;
	private LocalDate fromDate;
	private LocalDate toDate;
	private String onDutyType;
	private String comment;
}
