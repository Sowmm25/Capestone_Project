package com.example.Movie.Ticket.Booking.repository;

import com.example.Movie.Ticket.Booking.entity.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<User,Integer>{

	User findByEmailAndPassword(String email, String password);
	User findByEmail(String email);
	//User findByLogin(String login);
	

}
