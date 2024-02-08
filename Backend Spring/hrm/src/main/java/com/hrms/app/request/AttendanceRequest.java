package com.hrms.app.request;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data
public class AttendanceRequest {

	private String attendanceId;

	private String employeeId;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;

}
