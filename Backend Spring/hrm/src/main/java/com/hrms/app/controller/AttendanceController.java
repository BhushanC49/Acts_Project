package com.hrms.app.controller;

import java.time.LocalDate;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.request.AttendanceRequest;
import com.hrms.app.response.AttendanceDto;
import com.hrms.app.response.LeaveTypeDto;
import com.hrms.app.service.AttendanceService;
import com.hrms.app.utils.AuthUtils;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/attendance")

public class AttendanceController {

	@Autowired
	private AttendanceService attendanceService;

	@Autowired
	private AuthUtils authUtils;

	@PostMapping("/mark-attendance")
	public ResponseEntity<?> addAttendance(AttendanceRequest attendance) {
		try {
			// calling LeaveService method for adding leave in db
			System.out.println("attendance");
			LocalDate dt = attendance.getDate(); 
			
			String username = authUtils.getUsername();
			return new ResponseEntity<>(attendanceService.markAttendance(dt, username), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("err in controller " + e);
			// return err mesg wrapped in DTO : ApiResp
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}

	}

	@GetMapping("/get-attendance")
	public ResponseEntity<?> getAttendanceData() {
		try { 
			System.out.println("in get attendance");
			LocalDate dt = LocalDate.now();
			String username = authUtils.getUsername();
			List<AttendanceDto> attendanceList = attendanceService.getAttendanceDate(dt, username);
			return new ResponseEntity<>(attendanceList, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}

	}

}
