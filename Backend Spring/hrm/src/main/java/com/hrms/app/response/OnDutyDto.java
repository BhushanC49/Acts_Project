package com.hrms.app.response;

import java.time.LocalDate;

import lombok.Data;

@Data
public class OnDutyDto {
	
	private String onDutyId;
	private String employeeId;
	private LocalDate fromDate;
	private LocalDate toDate;
	private String onDutyType;
	private String comment;

}


//OnDutyDto check