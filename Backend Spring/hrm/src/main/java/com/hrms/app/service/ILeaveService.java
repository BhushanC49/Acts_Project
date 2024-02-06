package com.hrms.app.service;

import com.hrms.app.request.LeaveRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.LeaveDto;

public interface ILeaveService {
	
	LeaveDto addLeave(LeaveRequest leave);
	
	ApiResponse deleteLeave(String leaveid);
	
	int getLeaveBalance(String empid);

}
