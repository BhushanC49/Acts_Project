package com.hrms.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hrms.app.model.Company;
import com.hrms.app.repo.IcompanyRepository;
import com.hrms.app.request.ProjectRequest;
import com.hrms.app.response.ProjectDTO;
import com.hrms.app.service.ProjectServiceImpl;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

	@Autowired
	private ProjectServiceImpl projectService;

	@Autowired
	private IcompanyRepository companyRepo;

	@PostMapping("/create")
	public ResponseEntity<ProjectDTO> createProject(@RequestBody ProjectRequest request) {

		if (request.getCompanyName() == null) {
			// Handle case where company with given name is not found
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		ProjectDTO projectDTO = projectService.createProject(request);

		return new ResponseEntity<>(projectDTO, HttpStatus.CREATED);
	}

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
