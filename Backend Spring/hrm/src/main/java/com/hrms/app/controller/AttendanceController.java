package com.hrms.app.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.request.AttendanceRequest;
import com.hrms.app.service.AttendanceService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/attendance")
@CrossOrigin(origins = "http://localhost:3000")
public class AttendanceController {

	@Autowired
	private AttendanceService attendanceService;

	@PostMapping("/{empId}")
	public ResponseEntity<?> addAttendance(@PathVariable String empId, @Valid AttendanceRequest attendance) {
		try {
			// calling LeaveService method for adding leave in db
			LocalDate dt = attendance.getDate();
			return new ResponseEntity<>(attendanceService.markAttendance(dt, empId), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("err in controller " + e);
			// return err mesg wrapped in DTO : ApiResp
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}

	}

}
