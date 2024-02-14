package com.hrms.app.service;

import java.time.LocalDate;
import java.time.YearMonth;
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
import com.hrms.app.repo.IAttendanceRepository;
import com.hrms.app.repo.IEmployeeRepository;
import com.hrms.app.request.AttendanceRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.AttendanceDto;

@Service
public class AttendanceService {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private IEmployeeRepository empRepo;

	@Autowired
	private IAttendanceRepository attendanceRepo;

	public List<AttendanceDto> getAttendanceDate(LocalDate date, String username) {
		try {
			Optional<Employee> o = empRepo.findByUserName(username);
			if (o.isPresent()) {
				Employee emp = o.get();
				String id = emp.getEmpId();
				LocalDate startOfMonth = YearMonth.from(date).atDay(1);

				// Fetch attendance records for the user within the date range
				List<Optional<Attendance>> attendanceList = attendanceRepo.findByEmpidAndDateBetween(id, startOfMonth,
						date);

				// Convert Attendance objects to AttendanceDto objects
				List<AttendanceDto> attendanceDtoList = new ArrayList<>();
				for (Optional<Attendance> attendance : attendanceList) {
					attendance.ifPresent(a -> {
						AttendanceDto attendanceDto = new AttendanceDto();
						attendanceDto.setDate(a.getDate());
						attendanceDtoList.add(attendanceDto);
					});
				}
				return attendanceDtoList;
			}
		} catch (Exception e) {
			throw new ApiException("Attendance Cannot be fetched ");
		}
		return new ArrayList<>(); // Return an empty list if something goes wrong
	}

	public ApiResponse markAttendance(LocalDate date, String username) {
		try {
			Optional<Employee> e = empRepo.findByUserName(username);
			if (e.isPresent()) {
				Employee employee = e.get();
				Attendance attendance = new Attendance();
				attendance.setEmpid(employee);
				attendance.setDate(date);
				attendance.setPresent(true);
				attendanceRepo.save(attendance);
				return new ApiResponse("Attendance Marked");
			} else {
				return new ApiResponse("Employee not found with ID: " + username);
			}
		} catch (Exception e) {

			return new ApiResponse("Error marking attendance: " + e.getMessage());
		}
	}

}
