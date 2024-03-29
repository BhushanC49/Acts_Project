package com.hrms.app;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.hrms.app.model.Project;
import com.hrms.app.response.ProjectDTO;

@SpringBootApplication
public class HrWebappApplication {

	public static void main(String[] args) {
		SpringApplication.run(HrWebappApplication.class, args);
	}
	@Bean //equivalent to <bean id ..../> in xml file
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();	
		modelMapper.getConfiguration().
		setMatchingStrategy(MatchingStrategies.STRICT) 
		//only MATCHING prop names n types between src n dest will be transferred , during the mapping
		.setPropertyCondition(Conditions.isNotNull());
		// only non null properties will be transferred from src --> dest , during the mapping
		return modelMapper;//method rets configured  ModelMapper instance to SC
		//SC registers it as a spring bean n manages it's life cycle.

	}
//	@Bean
//    public ModelMapper modelMapper() {
//        ModelMapper modelMapper = new ModelMapper();
//
//        // Custom mappings for Project to ProjectDTO
//        modelMapper.createTypeMap(Project.class, ProjectDTO.class)
//                .addMapping(src -> src.getCompany().getCompanyName(), ProjectDTO::setCompanyName)
//                .addMapping(Project::getProjectTitle, ProjectDTO::setProjectTitle);
//
//        return modelMapper;
//    }

}
