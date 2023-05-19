package com.example.Movie.Ticket.Booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Movie.Ticket.Booking.entity.User;
import com.example.Movie.Ticket.Booking.repository.UserRepository;
import com.example.Movie.Ticket.Booking.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserWebController {
	private final UserService service;
	public UserWebController(UserService service) {
		this.service=service;
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody User user){
		User registeredUser=service.registerUser(user);
		return new ResponseEntity<>(registeredUser,HttpStatus.CREATED);
		
	}
	@PostMapping("/login")
	public ResponseEntity<User> loginUser(@RequestParam("email") String email,@RequestParam("password")String password){
	User loggedInUser=service.loginuser(email,password);
	return new ResponseEntity<>(loggedInUser, HttpStatus.OK);

}
}