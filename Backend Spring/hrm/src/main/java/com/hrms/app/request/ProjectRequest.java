package com.hrms.app.request;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.hrms.app.model.Company;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ProjectRequest {
	
	
	@NotBlank(message = "company name can not be blank")
	private String companyName;
	@NotBlank(message = "project title can not be blank")
    private String projectName;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;
    
}
