package com.hrms.app.service;

   
   import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.mapper.CustomModelMapper;
import com.hrms.app.model.Company;
import com.hrms.app.model.Project;
import com.hrms.app.repo.IProjectRepository;
import com.hrms.app.repo.IcompanyRepository;
import com.hrms.app.request.ProjectRequest;
import com.hrms.app.response.ProjectDTO;

   @Service
   public class ProjectServiceImpl{

       @Autowired
       private IProjectRepository projectRepository;

       @Autowired
       private CustomModelMapper modelMapper;
       
       @Autowired
       private IcompanyRepository companyRepo;

       public ProjectDTO createProject(ProjectRequest request) {
           // Map request to entity
           Project project = modelMapper.mapProjectRequestToEntity(request);
           
           project.setCompany(companyRepo.findByCompanyName(request.getCompanyName()));
           // Set isActive to true (assuming it should be true for new projects)
           project.setActive(true);
           
           // Set createdOn timestamp
           project.setCreatedOn(LocalDateTime.now());
           
           
    
           // Save project to database
           project = projectRepository.save(project);
           
          
           // Map entity to DTO
           return modelMapper.mapProjectToDTO(project);
       }

       public ProjectDTO getProjectById(String projectId) {
           // Find project by ID
           Project project = projectRepository.findById(projectId).orElseThrow();
           if (project !=null) {
               // Map entity to DTO
               return modelMapper.mapProjectToDTO(project);
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
                   .map(project -> modelMapper.mapProjectToDTO(project))
                   .collect(Collectors.toList());
       }

       public List<ProjectDTO> getProjectsByName(String projectName) {
           // Get projects by name from the database
           List<Project> projects = projectRepository.findByProjectTitleContainingIgnoreCase(projectName);
           
           // Map list of entities to list of DTOs
           return projects.stream()
                   .map(project -> modelMapper.mapProjectToDTO(project))
                   .collect(Collectors.toList());
       }
   }

   

