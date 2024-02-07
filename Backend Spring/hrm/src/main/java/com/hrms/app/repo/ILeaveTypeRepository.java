package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.LeaveType;

public interface ILeaveTypeRepository extends MongoRepository<LeaveType, String> {

}
