package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hrms.app.model.LeaveType;

@Repository
public interface ILeaveTypeRepository extends MongoRepository<LeaveType, String> {

}
