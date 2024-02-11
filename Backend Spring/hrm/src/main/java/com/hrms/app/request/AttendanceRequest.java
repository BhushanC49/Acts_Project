package com.hrms.app.request;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AttendanceRequest {
	

	private LocalDate date;
}
