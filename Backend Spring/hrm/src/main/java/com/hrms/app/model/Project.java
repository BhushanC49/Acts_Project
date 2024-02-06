package com.hrms.app.model;

import java.time.LocalDate;
import org.springframework.data.annotation.Id;

public class Project {
	// primary key
	@Id
	private String Project_id;
	private String company_id;
	private String project_title;
	private LocalDate start_date;
	private LocalDate end_Date;
	private String Record_status;
}
