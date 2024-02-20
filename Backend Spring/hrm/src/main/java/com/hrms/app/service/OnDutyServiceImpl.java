package com.hrms.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.custome_exception.ApiException;
import com.hrms.app.custome_exception.ResourceNotFoundException;
import com.hrms.app.model.Attendance;
import com.hrms.app.model.Employee;
import com.hrms.app.model.OnDuty;
import com.hrms.app.repo.IAttendanceRepository;
import com.hrms.app.repo.IEmployeeRepository;
import com.hrms.app.repo.IOnDutyRepository;
import com.hrms.app.request.OnDutyRequest;
import com.hrms.app.response.ApiResponse;

import com.hrms.app.response.OnDutyDto;

@Service
public class OnDutyServiceImpl {

	@Autowired
	private IEmployeeRepository empRepo;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private IAttendanceRepository attendanceRepo;

	@Autowired
	private IOnDutyRepository onDutyRepo;

	public List<OnDutyDto> getOnDutyList(String username) {
		Optional<Employee> o = empRepo.findByUserName(username);
		if (o.isPresent()) {
			Employee employee = o.get();
			String desig = employee.getDesig();
			String managerId = employee.getEmpId();
			if ("MANAGER".equalsIgnoreCase(desig)) {
				List<OnDutyDto> dtoList = new ArrayList<>();
				try {
					List<Employee> empList = empRepo.findByManager(managerId); // Get employees managed by the manager
					for (Employee emp : empList) {
						String empId = emp.getEmpId(); // Get the employee ID
						Optional<Employee> onDutyEmployee = onDutyRepo.findByEmpId(empId);
						if (onDutyEmployee.isPresent()) { // Fetch onDuty based on employee ID and map them to DTO
							OnDutyDto onDutyDto = mapper.map(onDutyEmployee.get(), OnDutyDto.class);
							dtoList.add(onDutyDto);
						}
					}
				} catch (Exception e) {
					throw new ResourceNotFoundException("Exception in fetching onDuty list !");
				}
				return dtoList;
			}
		}
		return new ArrayList<>(); // Return an empty list if the employee is not a manager or other conditions are
									// not met

	}

	public ApiResponse markOnDuty(String onDutyId) {
		try {
			Optional<OnDuty> onDuty = onDutyRepo.findById(onDutyId);
			if (onDuty.isPresent()) {
				OnDuty o = onDuty.get();
				o.setAccepted(true);
				onDutyRepo.save(o);// check if it updates only the accepted true value
				List<Optional<Attendance>> attendanceList = attendanceRepo.findByEmpidAndDateBetween(o.getEmpId(),
						o.getFromDate(), o.getToDate());

				for (Optional<Attendance> attendanceOpt : attendanceList) {// iterate through optional list
					attendanceOpt.ifPresent(attendance -> {
						attendance.setPresent(true); // Set isPresent to true
						attendanceRepo.save(attendance); // Save the updated Attendance object

					});
				}

			}

		} catch (Exception e) {
			// TODO: handle exception
			throw new ApiException("Error in marking onDuty attendance ");
		}
		return new ApiResponse("Attendance marked for On Duty Form");
	}

	public ApiResponse recordOnDuty(String username, OnDutyRequest onDutyReq) {

//		List<Optional<Attendance>> attendanceList = attendanceRepository
//				.findByEmpidAndDateBetween(onDutyReq.getEmployeeId(), onDutyReq.getFromDate(), onDutyReq.getToDate());
//
//		for (Optional<Attendance> attendanceOpt : attendanceList) {// iterate through optional list
//			attendanceOpt.ifPresent(attendance -> {
//				attendance.setPresent(true); // Set isPresent to true
//				attendanceRepository.save(attendance); // Save the updated Attendance object
//
//			});
//		}
		OnDuty onduty = new OnDuty();
		Optional<Employee> o = empRepo.findByUserName(username);
		if (o.isPresent()) {
			Employee employee = o.get();
			onduty.setEmpId(employee.getEmpId());

		}

		onduty.setFromDate(onDutyReq.getFromDate());
		onduty.setToDate(onDutyReq.getToDate());
		onduty.setComment(onDutyReq.getComment());
		onduty.setOnDutyId(onDutyReq.getOnDutyType());
		onduty.setAccepted(false);
		onDutyRepo.save(onduty);

		return new ApiResponse("On-Duty form recorded!");
	}

}
