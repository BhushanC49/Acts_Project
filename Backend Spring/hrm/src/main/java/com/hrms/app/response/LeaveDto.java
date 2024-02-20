package com.hrms.app.response;

import java.time.LocalDate;

import com.hrms.app.model.LeaveType;

import lombok.Data;

@Data
public class LeaveDto {
	private String firstName;
	
	private String lastName;

	private String leaveId;

	private LeaveType leaveTypeId;

	private LocalDate leaveStartOn;

	private LocalDate leaveEndOn;

//    private int numberOfDays;

	private String leaveStatus;

}
