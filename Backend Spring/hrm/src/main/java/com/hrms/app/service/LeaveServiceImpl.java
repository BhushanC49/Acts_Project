package com.hrms.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.model.Employee;
import com.hrms.app.model.Leave;
import com.hrms.app.repo.ILeaveRepository;
import com.hrms.app.request.LeaveRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.EmployeeDto;
import com.hrms.app.response.LeaveDto;

@Service
public class LeaveServiceImpl implements ILeaveService {
	
	@Autowired
	private ModelMapper mapper;

	
	@Autowired
	private ILeaveRepository leaveRepository ;

	@Override
	public LeaveDto addLeave(LeaveRequest leaveReq) {
		
		//convert LeaveRequest to Leave
		Leave leave=mapper.map(leaveReq,Leave.class);  
		//save leave object in database before mapping to dto 
		leaveRepository.save(leave); 
		
		//return by mapping to dto
		return mapper.map(leave,LeaveDto.class);
		
	}

	@Override
	public ApiResponse deleteLeave(String leaveid) {
		leaveRepository.deleteById(leaveid);
		return new ApiResponse("Leave Details of emp with ID " + leaveid + " deleted....");

	}

	@Override
	public int getLeaveBalance(String empid) {
		
		return leaveRepository.getLeaveBalance(empid);
	}

}
