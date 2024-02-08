package com.hrms.app.request;

import java.time.LocalDate;

import lombok.Data;

@Data
public class ProjectRequest {
	
	private String companyName;
    private String projectTitle;
    private LocalDate startDate;
    private LocalDate endDate;
}
