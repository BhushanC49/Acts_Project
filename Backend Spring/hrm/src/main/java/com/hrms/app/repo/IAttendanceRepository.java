package com.hrms.app.repo;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.Attendance;

public interface IAttendanceRepository extends MongoRepository<Attendance, String> {

	List<Optional<Attendance>> findByEmpidAndDateBetween(String empId, LocalDate startDate, LocalDate endDate);

}
