package com.ams.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ams.dao.BookingDAO;

import com.ams.model.Booking;

@Service
public class BookingService {

	@Autowired
	BookingDAO bookingdao;

	public boolean addBooking(Booking newBooking) {

		bookingdao.save(newBooking);
		return true;

	}

//	public void updateBooking(Booking changedBooking) {
//		bookingdao.save(changedBooking);
//	}
//
//	public String deleteBooking(int bookingId) {
//		bookingdao.deleteById(bookingId);
//		return "Booking Deleted!!";
//	}

	public List<Booking> getAll() {
		Iterator<Booking> it = bookingdao.findAll().iterator();
		List<Booking> list = new ArrayList<Booking>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}

}
