package com.hrms.app.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hrms.app.model.Employee;
import com.hrms.app.model.Leave;
import com.hrms.app.request.LeaveRequest;
import com.hrms.app.response.LeaveDto;

public interface ILeaveRepository extends MongoRepository<Leave, String> {

	Optional<Leave> findByEmpId(String empId);

}
