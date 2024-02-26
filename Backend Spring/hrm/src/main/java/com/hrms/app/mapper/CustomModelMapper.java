package com.hrms.app.mapper;

import org.springframework.stereotype.Component;

import com.hrms.app.model.Project;
import com.hrms.app.request.ProjectRequest;
import com.hrms.app.response.ProjectDTO;

@Component
public class CustomModelMapper {

    public Project mapProjectRequestToEntity(ProjectRequest projectRequest) {
        Project project = new Project();
        project.setProjectTitle(projectRequest.getProjectName());
     
        return project;
    }

    public ProjectDTO mapProjectToDTO(Project project) {
        ProjectDTO projectDTO = new ProjectDTO();
        projectDTO.setId(project.getProjectId());
        //projectDTO.setCompanyName(project.getCompany().getCompanyName());
        projectDTO.setProjectTitle(project.getProjectTitle());
        // Map other fields as needed
        return projectDTO;
    }
}

