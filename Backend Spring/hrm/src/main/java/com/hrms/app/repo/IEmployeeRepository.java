package com.hrms.app.repo;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.Employee;

public interface IEmployeeRepository extends MongoRepository<Employee, String> {

	public Optional<Employee> findByUserNameAndPassword(String username, String password);

	public List<Employee> findByDesig(String designation);

	public List<Employee> findByManager(String managerId); 
	
	Page<Employee> findByManager(String managerId, Pageable pageable);

	public Optional<Employee> findByUserName(String username);
}
