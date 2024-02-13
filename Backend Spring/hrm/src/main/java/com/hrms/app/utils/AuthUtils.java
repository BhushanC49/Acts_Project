package com.hrms.app.utils;

import java.util.Optional;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

@Service
public class AuthUtils {
	public String getUsername() {
		return Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
				.map(auth -> auth.getPrincipal())
				.map(principal -> (Jwt) principal)
				.map(p -> p.getSubject()).orElse("");
	}
}
