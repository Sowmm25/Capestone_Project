package com.example.Movie.Ticket.Booking.service;

import org.springframework.stereotype.Service;

import com.example.Movie.Ticket.Booking.entity.*;
import com.example.Movie.Ticket.Booking.repository.*;



@Service
public class UserService {

private final UserRepository userRepository;
public UserService(UserRepository userRepository) {
this.userRepository = userRepository;
}
public User loginuser(String email,String password) {
	User user=userRepository.findByEmailAndPassword(email,password);
	if(user==null) {
		throw new RuntimeException("Invalid login credentials");
	}
	return user;
	}

public User registerUser(User user) {
if (userRepository.findByEmail(user.getEmail()) != null) {
throw new RuntimeException("Username already exists");
}
// You can perform additional validations or modifications to the user object here
// For example, encoding the password before saving it to the database

return userRepository.save(user);
}
}
