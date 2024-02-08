package com.hrms.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.model.Employee;
import com.hrms.app.model.Leave;
import com.hrms.app.model.LeaveType;
import com.hrms.app.repo.ILeaveRepository;
import com.hrms.app.repo.ILeaveTypeRepository;
import com.hrms.app.request.LeaveRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.LeaveDto;
import com.hrms.app.response.LeaveTypeDto;

@Service
public class LeaveServiceImpl {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private ILeaveRepository leaveRepository;

	@Autowired
	private ILeaveTypeRepository leaveTypeRepository;

	public LeaveDto addLeave(LeaveRequest leaveReq) {

		// convert LeaveRequest to Leave
		Leave leave = mapper.map(leaveReq, Leave.class);
		// save leave object in database before mapping to dto
		leaveRepository.save(leave);

		// return by mapping to dto
		return mapper.map(leave, LeaveDto.class);

	}

	public List<LeaveTypeDto> getLeaveType() {
		List<LeaveType> leaveTypes = leaveTypeRepository.findAll();

		// Map each LeaveType entity to LeaveTypeDto using ModelMapper
		List<LeaveTypeDto> leaveTypeDtos = leaveTypes.stream()
				.map(leaveType -> mapper.map(leaveType, LeaveTypeDto.class)).collect(Collectors.toList());
		return leaveTypeDtos;

	}

	public ApiResponse deleteLeave(String leaveid) {
		leaveRepository.deleteById(leaveid);
		return new ApiResponse("Leave Details of emp with ID " + leaveid + " deleted....");

	}

	public int getLeaveBalance(String empid) {

		Optional<Employee> e = leaveRepository.findByEmpId(empid);

		if (e.isPresent()) {
			//get employee from optional wrapper
			Employee employee = e.get();
			//then get leave balance from employee
			return employee.getLeaveBalance();
		} else {
			// Handle if employee with empId is not found
			return 0; 
		}
	}

}
