package com.hrms.app.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.EmpSalaryStructure;

public interface IEmpSalaryStruReository extends MongoRepository<EmpSalaryStructure,String> {
}
