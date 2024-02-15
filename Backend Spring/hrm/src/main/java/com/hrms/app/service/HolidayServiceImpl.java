package com.hrms.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
}


