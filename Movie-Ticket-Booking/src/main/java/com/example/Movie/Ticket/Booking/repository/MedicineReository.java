package com.example.Movie.Ticket.Booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Movie.Ticket.Booking.entity.Medicine;
@Repository

public interface MedicineReository extends JpaRepository<Medicine, Integer> {

}
