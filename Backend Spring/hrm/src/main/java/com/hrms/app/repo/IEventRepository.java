package com.hrms.app.repo;
import com.hrms.app.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface IEventRepository extends MongoRepository<Event, String> {
    
}

