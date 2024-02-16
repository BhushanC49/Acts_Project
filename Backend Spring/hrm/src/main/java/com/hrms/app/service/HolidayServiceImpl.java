package com.hrms.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.hrms.app.model.Holiday;
import com.hrms.app.repo.IHolidayRepositary;
import com.hrms.app.request.HolidayRequest;
import com.hrms.app.response.HolidayDto;

@Service
public class HolidayServiceImpl {
	
	@Autowired
	private IHolidayRepositary holidayRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	public HolidayDto addHoliday(HolidayRequest holidayReq) {
		Holiday holiday = mapper.map(holidayReq, Holiday.class);
		
		holiday.setRecordStatus(true);
		holidayRepo.save(holiday);
		System.out.println("Holiday Added with id: " + holiday.getId());
		return mapper.map(holiday, HolidayDto.class);
	}
	
	public List<HolidayDto> getAllHolidays() {
		List<Holiday> holidays = holidayRepo.findAll();
		System.out.println("in a holiday service"+ holidays);
		return holidays.stream()
				.map(holiday -> mapper.map(holiday, HolidayDto.class))
				.collect(Collectors.toList());
	}
}


