package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.EmpSalaryStru;

public interface IEmpSalaryStruReository extends MongoRepository<EmpSalaryStru,Integer> {

}
