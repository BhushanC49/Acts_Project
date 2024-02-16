package com.hrms.app.response;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter 
@Setter 
@ToString
public class HolidayDto {

	private String Id;
	private String holidayName;
	private LocalDate holidayFromDate;
	private LocalDate holidayToDate;
	private boolean recordStatus;
}
