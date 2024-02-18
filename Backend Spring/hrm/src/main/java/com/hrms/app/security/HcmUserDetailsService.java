package com.hrms.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hrms.app.repo.IEmployeeRepository;

@Service
public class HcmUserDetailsService implements UserDetailsService {

    @Autowired
    private IEmployeeRepository employeeRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return employeeRepo.findByUserName(username)
				.map(e -> User.withUsername(e.getUserName()).password(e.getPassword()).authorities(e.getDesig()).build())
				.orElseThrow(() -> new UsernameNotFoundException("User not found"));
		
//		Optional<Employee> e = employeeRepo.findByUserName(username);
//        if (e.isEmpty()) {
//            throw new UsernameNotFoundException(String.format("Username %s not found", username));
//        }
//        Employee emp = e.get();
//        return User.withUsername(emp.getUserName()).password(emp.getPassword()).build();
        
	}
}