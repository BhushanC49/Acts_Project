package com.hrms.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.model.Attendance;
import com.hrms.app.repo.IAttendanceRepository;
import com.hrms.app.request.AttendanceRequest;
import com.hrms.app.response.ApiResponse;

@Service
public class AttendanceService {
	
	@Autowired
	private ModelMapper mapper;

	@Autowired
	private IAttendanceRepository attendanceRepo;

	public ApiResponse markAttendance(AttendanceRequest a) {
		Attendance attendance= mapper.map(a, Attendance.class);
		attendance.setPresent(true);
		attendanceRepo.save(attendance);
		return new ApiResponse("Attendance Marked");

	}

}
