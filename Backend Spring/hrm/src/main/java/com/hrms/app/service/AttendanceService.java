package com.hrms.app.service;

import java.time.LocalDate;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.model.Attendance;
import com.hrms.app.model.Employee;
import com.hrms.app.repo.IAttendanceRepository;
import com.hrms.app.repo.IEmployeeRepository;
import com.hrms.app.request.AttendanceRequest;
import com.hrms.app.response.ApiResponse;

@Service
public class AttendanceService {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private IEmployeeRepository empRepo;

	@Autowired
	private IAttendanceRepository attendanceRepo;

	public ApiResponse markAttendance(LocalDate date, String empId) {
		Optional<Employee> e = empRepo.findById(empId);
		if (e.isPresent()) {
			Employee employee = e.get();
			Attendance attendance = new Attendance();
			attendance.setEmpid(employee);
			attendance.setDate(date);
			attendance.setPresent(true); 
			attendanceRepo.save(attendance);
			return new ApiResponse("Attendance Marked");
		} else {
			return new ApiResponse("Employee not found with ID: " + empId);
		}
	}

}
