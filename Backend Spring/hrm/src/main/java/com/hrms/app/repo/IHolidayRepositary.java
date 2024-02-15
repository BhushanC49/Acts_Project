package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hrms.app.model.Holiday;

public interface IHolidayRepositary extends MongoRepository<Holiday, String> {

	//public Optional<Holiday> findById(String Id);

}
