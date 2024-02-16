package com.hrms.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hrms.app.request.LeaveTypeRequest;
import com.hrms.app.response.LeaveTypeDto;
import com.hrms.app.service.LeaveTypeServiceImpl;

@RestController
@RequestMapping("/api/leavetypes")
public class LeaveTypeController {

    @Autowired
    private LeaveTypeServiceImpl leaveTypeService;

    @PostMapping("/add")
    public ResponseEntity<LeaveTypeDto> addLeaveType(@RequestBody LeaveTypeRequest leaveTypeRequest) {
        LeaveTypeDto leaveTypeDto = leaveTypeService.addLeaveType(leaveTypeRequest);
        return new ResponseEntity<>(leaveTypeDto, HttpStatus.CREATED);
    }
}