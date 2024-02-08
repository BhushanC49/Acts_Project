package com.hrms.app.service;

   
   import org.modelmapper.ModelMapper;
   import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.hrms.app.model.Project;
import com.hrms.app.repo.IProjectRepository;
import com.hrms.app.request.ProjectRequest;
import com.hrms.app.response.ProjectDTO;

import java.time.LocalDateTime;
import java.util.List;
   import java.util.Optional;
   import java.util.stream.Collectors;

   @Service
   public class ProjectServiceImpl{

       @Autowired
       private IProjectRepository projectRepository;

       @Autowired
       private ModelMapper modelMapper;

       public ProjectDTO createProject(ProjectRequest request) {
           // Map request to entity
           Project project = modelMapper.map(request, Project.class);
           
           // Set isActive to true (assuming it should be true for new projects)
           project.setActive(true);
           
           // Set createdOn timestamp
           project.setCreatedOn(LocalDateTime.now());
           
           // Save project to database
           project = projectRepository.save(project);
           
           // Map entity to DTO
           return modelMapper.map(project, ProjectDTO.class);
       }

       public ProjectDTO getProjectById(String projectId) {
           // Find project by ID
           Optional<Project> optionalProject = projectRepository.findById(projectId);
           if (optionalProject.isPresent()) {
               // Map entity to DTO
               return modelMapper.map(optionalProject.get(), ProjectDTO.class);
           } else {
               // Handle case where project with given ID is not found
               throw new RuntimeException("Project not found with ID: " + projectId);
           }
       }

       public List<ProjectDTO> getAllProjects() {
           // Get all projects from the database
           List<Project> projects = projectRepository.findAll();
           
           // Map list of entities to list of DTOs
           return projects.stream()
                   .map(project -> modelMapper.map(project, ProjectDTO.class))
                   .collect(Collectors.toList());
       }

       public List<ProjectDTO> getProjectsByName(String projectName) {
           // Get projects by name from the database
           List<Project> projects = projectRepository.findByProjectTitleContainingIgnoreCase(projectName);
           
           // Map list of entities to list of DTOs
           return projects.stream()
                   .map(project -> modelMapper.map(project, ProjectDTO.class))
                   .collect(Collectors.toList());
       }
   }

   

