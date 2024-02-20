package com.hrms.app.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.Leave;

public interface ILeaveRepository extends MongoRepository<Leave, String> {

	Optional<Leave> findByEmpId(String empId);

	List<Leave> findAllByEmpId(String empId);

}
