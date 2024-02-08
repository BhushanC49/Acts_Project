package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.Attendance;

public interface IAttendanceRepository extends MongoRepository<Attendance, String> {
	
	

}
