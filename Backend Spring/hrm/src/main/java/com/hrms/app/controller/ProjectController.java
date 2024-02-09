package com.hrms.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hrms.app.request.ProjectRequest;
import com.hrms.app.response.ProjectDTO;
import com.hrms.app.service.ProjectServiceImpl;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectServiceImpl projectService;

    @PostMapping("/create")
    public ResponseEntity<ProjectDTO> createProject(@RequestBody ProjectRequest request) {
        ProjectDTO projectDTO = projectService.createProject(request);
        return new ResponseEntity<>(projectDTO, HttpStatus.CREATED);
    }

//    @GetMapping("/{projectId}")
//    public ResponseEntity<ProjectDTO> getProjectById(@PathVariable String projectId) {
//        ProjectDTO projectDTO = projectService.getProjectById(projectId);
//        return ResponseEntity.ok(projectDTO);
//    }

    @GetMapping("/all")
    public ResponseEntity<List<ProjectDTO>> getAllProjects() {
        List<ProjectDTO> projects = projectService.getAllProjects();
        return ResponseEntity.ok(projects);
    }

    @GetMapping("/search")
    public ResponseEntity<List<ProjectDTO>> searchProjects(@RequestParam(name = "projectName") String projectName) {
        List<ProjectDTO> projects = projectService.getProjectsByName(projectName);
        return ResponseEntity.ok(projects);
    }
}
