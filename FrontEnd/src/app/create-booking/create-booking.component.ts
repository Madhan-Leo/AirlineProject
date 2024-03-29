import { Component, OnInit } from '@angular/core';
import { Booking } from '../Model/booking';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  title : string ='CreateBookingComponent';
  booking: Booking = new Booking();
  submitted = false;
  myForm!: FormGroup;
  
  constructor(private bookingService: BookingService, private router: Router) { 
    this.myForm = new FormGroup({
      bookingId: new FormControl('',[Validators.required]),
      userId: new FormControl('',[Validators.required]),
      flightNo: new FormControl('',[Validators.required]),
      travellingDate: new FormControl('',[Validators.required]),
      noOfTickets: new FormControl('',[Validators.required]),
     
    })
  }

  ngOnInit(): void {
  }

  newBooking(): void {
    this.submitted = false;
    this.booking = new Booking();
  }

  save() {
    this.bookingService.addBooking(this.booking)
    .subscribe(data => console.log(data),
    error => console.log(error));
    this.booking = new Booking();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/bookings']);
  }

}
