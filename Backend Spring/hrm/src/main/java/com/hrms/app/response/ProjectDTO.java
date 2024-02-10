package com.hrms.app.response;

import java.time.LocalDate;

import com.hrms.app.model.Company;

import lombok.Data;

@Data
public class ProjectDTO {
	private String id;
	private String companyName;
	private String projectTitle;
	private LocalDate startDate;
	private LocalDate endDate;
}
