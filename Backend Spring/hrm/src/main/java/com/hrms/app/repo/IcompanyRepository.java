package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.Company;
import com.hrms.app.request.ProjectRequest;

public interface IcompanyRepository extends MongoRepository<Company, String>{

	Company findByCompanyName(String string);

}
