package com.hrms.app.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.Department;

public interface IDepartmentRepository extends MongoRepository<Department,String>{
	
	public List<Department> findBydeptName(String deptname);
	public List<Department> findBydeptId(String deptid);
}
