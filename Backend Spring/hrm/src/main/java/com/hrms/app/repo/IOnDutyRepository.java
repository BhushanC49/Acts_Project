package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.OnDuty;

public interface IOnDutyRepository extends MongoRepository<OnDuty, String> {

}
