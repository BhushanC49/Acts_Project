package com.hrms.app.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.hrms.app.model.Project;

public interface IProjectRepository extends MongoRepository<Project, String> {

	 List<Project> findByProjectTitleContainingIgnoreCase(String projectName);
}
