package com.hrms.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.model.Leave;
import com.hrms.app.request.EmployeeRequest;
import com.hrms.app.request.LeaveRequest;
import com.hrms.app.response.LeaveDto;
import com.hrms.app.service.LeaveServiceImpl;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/leaves")
public class LeaveController {
	
	@Autowired
	private LeaveServiceImpl leaveService;
	
	@PostMapping
	public ResponseEntity<?> addLeaveDetails(@RequestBody @Valid LeaveRequest leaveReq )
	{
		try {
			//calling LeaveService method for adding leave in db 
			return new ResponseEntity<>(leaveService.addLeave(leaveReq),HttpStatus.OK);
		}
		catch(RuntimeException e)
		{
			System.out.println("err in controller "+e);
			//return err mesg wrapped in DTO : ApiResp
			return  ResponseEntity
					.status(HttpStatus.NOT_FOUND)
					.body(e.getMessage());
		}
	}
	
	@DeleteMapping("/{leaveId}")
	public ResponseEntity<?> deleteLeave(@PathVariable String leaveId){
		System.out.println("in delete emp " + leaveId);
		return ResponseEntity.ok(leaveService.deleteLeave(leaveId));
	}
}
	
	
