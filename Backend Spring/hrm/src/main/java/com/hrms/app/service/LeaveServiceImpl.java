package com.hrms.app.service;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.custome_exception.ApiException;
import com.hrms.app.custome_exception.ResourceNotFoundException;
import com.hrms.app.model.Employee;
import com.hrms.app.model.Leave;
import com.hrms.app.model.LeaveType;
import com.hrms.app.repo.IEmployeeRepository;
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
	private IEmployeeRepository empRepo;

	@Autowired
	private ILeaveTypeRepository leaveTypeRepository;

	public ApiResponse approveLeave(String leaveId) {
		try {
			Optional<Leave> leave = leaveRepository.findById(leaveId);
			if (leave.isPresent()) {
				Leave l = leave.get();
				l.setLeaveStatus(true);
			}
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("Error occurred while approving leave: " + e.getMessage());
			throw new ApiException("Error occurred while approving leave. Please try again later.");
		}
		return new ApiResponse("Leave approved of employeeId : " + leaveId);
	}

	public List<LeaveTypeDto> getLeaveType() {
		List<LeaveType> leaveTypes = leaveTypeRepository.findAll();

		// Map each LeaveType entity to LeaveTypeDto using ModelMapper
		List<LeaveTypeDto> leaveTypeDtos = leaveTypes.stream()
				.map(leaveType -> mapper.map(leaveType, LeaveTypeDto.class)).collect(Collectors.toList());
		return leaveTypeDtos;

	}

	public List<LeaveDto> getLeavesList(String managerId) {
		List<LeaveDto> leaveList = new ArrayList<LeaveDto>();
		try {
			List<Employee> empList = empRepo.findByManager(managerId);// get employee by his respective manager
			for (Employee employee : empList) {
				String empId = employee.getEmpId();// get empId of that particular employee
				Optional<Employee> l = leaveRepository.findByEmpId(empId);
				if (l.isPresent()) {// then fetch leave based on employee id and map them to dto and add to the list
									// and return
					LeaveDto leaveDto = mapper.map(l, LeaveDto.class);
					leaveList.add(leaveDto);
				}
			}

		} catch (Exception e) {
			System.out.println("Exception in fetching leave list !");
			throw new ResourceNotFoundException("Exception in fetching leave list !");
		}
		return leaveList;
	}

	public LeaveDto addLeave(String empId, LeaveRequest leaveReq) {
		try {
			// convert LeaveRequest to Leave
			// Leave leave = mapper.map(leaveReq, Leave.class);
			Leave leave = new Leave();
			Optional<Employee> o = empRepo.findById(empId);
			if (o.isPresent()) {
				Employee employee = o.get();
				leave.setEmpId(employee);

			}
			// save leave object in database before mapping to dto
			Optional<LeaveType> leavetype = leaveTypeRepository.findById(leaveReq.getLeaveTypeId());
			if (leavetype.isPresent()) {
				LeaveType lt = leavetype.get();
				leave.setLeaveTypeId(lt);
			}
			leave.setLeaveComment(leaveReq.getLeaveComment());
			leave.setLeaveStartOn(leaveReq.getLeaveStartOn());
			leave.setLeaveEndOn(leaveReq.getLeaveEndOn());
			leave.setLeaveStatus(false);
			leaveRepository.save(leave);

			// return by mapping to dto
			return mapper.map(leave, LeaveDto.class);
		} catch (Exception e) {
			// Handle the exception
			System.out.println("Error occurred while adding leave: " + e.getMessage());
			throw new ApiException("Error occurred while adding leave. Please try again later.");
		}
	}

	public ApiResponse deleteLeave(String leaveid) {
		leaveRepository.deleteById(leaveid);
		return new ApiResponse("Leave Details of emp with ID " + leaveid + " deleted....");

	}

	public int getLeaveBalance(String empid) {
		try {
			Optional<Employee> e = leaveRepository.findByEmpId(empid);

			if (e.isPresent()) {
				// get employee from optional wrapper
				Employee employee = e.get();
				// then get leave balance from employee
				return employee.getLeaveBalance();
			} else {
				// Handle if employee with empId is not found
				return 0;
			}
		} catch (Exception e) {
			// Log the exception
			System.out.println("Error occurred while getting leave balance: " + e.getMessage());
			// Here, we return a default value of 0 if an error occurs
			return 0;
		}
	}

}
