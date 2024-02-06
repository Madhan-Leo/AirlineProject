package com.ams.service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ams.dao.FlightDAO;
import com.ams.model.Booking;
import com.ams.model.Flights;

@Service
public class FlightService {

	@Autowired
	FlightDAO flightdao;

	public void addFlight(Flights newFlight) {

		flightdao.save(newFlight);
		

	}
	
	public void modifyFlight(Flights flight) {
		flightdao.save(flight);
	}

	public String removeFlight(Flights flightNo) {
		flightdao.delete(flightNo);
		return "Flight removed!!";
	}

	public List<Flights> viewAllFlight() {
		Iterator<Flights> it = flightdao.findAll().iterator();
		List<Flights> list = new ArrayList<Flights>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}

}
