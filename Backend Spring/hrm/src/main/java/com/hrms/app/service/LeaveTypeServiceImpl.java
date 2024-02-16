package com.hrms.app.service;



import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.hrms.app.model.LeaveType;
import com.hrms.app.repo.ILeaveTypeRepository;
import com.hrms.app.request.LeaveTypeRequest;

import com.hrms.app.response.LeaveTypeDto;

@Service
public class LeaveTypeServiceImpl{

    @Autowired
    private ILeaveTypeRepository leaveTypeRepository;
    
    @Autowired
	 private ModelMapper mapper;

    public LeaveTypeDto addLeaveType(LeaveTypeRequest leaveTypeRequest) {
    	LeaveType leavetype = mapper.map(leaveTypeRequest, LeaveType.class);
    	LeaveType leave = leaveTypeRepository.save(leavetype);
        return mapper.map(leave, LeaveTypeDto.class);
     
    }
}