package com.hrms.app.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.Employee;
import com.hrms.app.model.OnDuty;

public interface IOnDutyRepository extends MongoRepository<OnDuty, String> {
	Optional<Employee> findByEmpId(String empId);

}
