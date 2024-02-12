import { Component, OnInit } from '@angular/core';
import { Booking } from '../Model/booking';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {
  title : string ='UpdateBookingComponent';
  submitted!: false;
  bookingId!: number;
  booking!: Booking;
  myForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookingService: BookingService) { 
      this.myForm = new FormGroup({
        bookingId: new FormControl('',[Validators.required]),
        userId: new FormControl('',[Validators.required]),
        flightNo: new FormControl('',[Validators.required]),
        travellingDate: new FormControl('',[Validators.required]),
        noOfTickets: new FormControl('',[Validators.required]),
       
      })
    }

  ngOnInit() {
    this.booking = new Booking();

    this.bookingId = this.route.snapshot.params['bookingId'];

    this.bookingService.getBooking(this.bookingId)
    .subscribe(data => {
      console.log(data);
      this.booking = data;
      },
      error => console.log(error));
  }

  updateBooking() {
    this.bookingService.updateBooking(this.booking)
      .subscribe(data => console.log(data), error => console.log(error));
    this.booking = new Booking();
    this.gotoList();
  }

  onSubmit() {
    
    this.updateBooking();
  }

  gotoList() {
    this.router.navigate(['/bookings']);
  }
}