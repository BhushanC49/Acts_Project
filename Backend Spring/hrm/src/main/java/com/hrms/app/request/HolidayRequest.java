package com.hrms.app.request;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class HolidayRequest {

	@Id
	private String Id;
	@NotBlank(message = "Name can not be blank")
	private String holidayName;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate holidayFromDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate holidayToDate;
	private boolean recordStatus;
	
}
