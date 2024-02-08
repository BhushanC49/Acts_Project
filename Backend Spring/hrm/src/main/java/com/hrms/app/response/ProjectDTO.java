package com.hrms.app.response;

import java.time.LocalDate;

import lombok.Data;

@Data

public class ProjectDTO {
	private String id;
	private String companyName;
	private String title;
	private LocalDate start;
	private LocalDate end;
}
