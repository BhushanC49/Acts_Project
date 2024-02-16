package com.hrms.app.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "holiday")
public class Holiday {

	@Id
	private String Id;
	private String holidayName;
	private LocalDate holidayFromDate;
	private LocalDate holidayToDate;
	private boolean recordStatus;
}
