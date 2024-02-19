package com.hrms.app.response;

import java.util.List;

import lombok.Data;
import lombok.ToString;
@Data 
@ToString
public class EmployeePageDto {
	private List<EmployeeDto> employeeList;
    private int totalPages;
}
