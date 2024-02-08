package com.hrms.app.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.Employee;

public interface IEmployeeRepository extends MongoRepository<Employee, String> {

	public Optional<Employee> findByUsernameAndPassword(String username, String password);

}
