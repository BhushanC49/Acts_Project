package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.Employee;

public interface IEmployeeRepository extends MongoRepository<Employee, String>{
	
}
