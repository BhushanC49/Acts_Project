package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.User;

public interface UserRepository extends MongoRepository<User, String>{
	
	
	

}
