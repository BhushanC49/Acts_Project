package com.hrms.app.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.model.Employee;
import com.hrms.app.model.Leave;
import com.hrms.app.request.EmployeeRequest;
import com.hrms.app.request.LeaveRequest;
import com.hrms.app.response.LeaveDto;
import com.hrms.app.response.LeaveTypeDto;
import com.hrms.app.service.LeaveServiceImpl;
import com.hrms.app.utils.AuthUtils;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/leave")
public class LeaveController {

	@Autowired
	private LeaveServiceImpl leaveService;
	
	@Autowired
	private AuthUtils authUtils;

	@PutMapping("/leave-approval/{leaveId}")
	public ResponseEntity<String> approveLeave(@PathVariable String leaveId) {
		try {
			leaveService.approveLeave(leaveId);
			return ResponseEntity.ok("Leave approved successfully");
		} catch (Exception e) {
			// Handle any errors and return an error response
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error approving leave: " + e.getMessage());
		}
	}

	@GetMapping()
	public ResponseEntity<?> getLeaveByManagerId() {
		try {
			String username=authUtils.getUsername();
			List<LeaveDto> leaveList = leaveService.getLeavesList(username);
			return new ResponseEntity<>(leaveList, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}

	}

	@PostMapping
	public ResponseEntity<?> addLeaveDetails(@RequestBody @Valid LeaveRequest leaveReq) {
		try {
			// calling LeaveService method for adding leave in db
			String username=authUtils.getUsername();
			return new ResponseEntity<>(leaveService.addLeave(username, leaveReq), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("Error in controller: " + e);
			// return error message wrapped in DTO: ApiResp
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@DeleteMapping("/{leaveId}")
	public ResponseEntity<?> deleteLeave(@PathVariable String leaveId) {
		System.out.println("in delete emp " + leaveId);
		return ResponseEntity.ok(leaveService.deleteLeave(leaveId));
	}

	// get all leave types from LeaveType Repo
	@GetMapping("/leave-types")
	public ResponseEntity<List<LeaveTypeDto>> getAllLeaveTypes() {
		List<LeaveTypeDto> leaveTypes = leaveService.getLeaveType();
		return new ResponseEntity<>(leaveTypes, HttpStatus.OK);
	}
}
