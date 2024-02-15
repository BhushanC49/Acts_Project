package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.PaySlip;

public interface IPaySlipRepository extends MongoRepository<PaySlip, String>{

}
