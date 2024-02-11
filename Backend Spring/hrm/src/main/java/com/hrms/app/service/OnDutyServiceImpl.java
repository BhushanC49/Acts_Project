package com.hrms.app.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.model.Attendance;
import com.hrms.app.model.OnDuty;
import com.hrms.app.repo.IAttendanceRepository;
import com.hrms.app.repo.IOnDutyRepository;
import com.hrms.app.request.OnDutyRequest;
import com.hrms.app.response.ApiResponse;

@Service
public class OnDutyServiceImpl {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private IAttendanceRepository attendanceRepository;

	@Autowired
	private IOnDutyRepository onDutyRepo;

	public ApiResponse markOnDuty(OnDutyRequest onDutyReq) {

		List<Optional<Attendance>> attendanceList = attendanceRepository.findByEmpidAndDateBetween(onDutyReq.getEmployeeId(),
				onDutyReq.getFromDate(), onDutyReq.getToDate());

		for (Optional<Attendance> attendanceOpt : attendanceList) {// iterate through optional list
			attendanceOpt.ifPresent(attendance -> {
				attendance.setPresent(true); // Set isPresent to true
				attendanceRepository.save(attendance); // Save the updated Attendance object
			});
		}
		OnDuty onduty = mapper.map(onDutyReq, OnDuty.class);
		onDutyRepo.save(onduty);

		return new ApiResponse("Attendance marked for on-duty period");
	}

}
