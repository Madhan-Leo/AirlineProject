import { Component, OnInit } from '@angular/core';
import { Flight } from '../Model/flight';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent  implements OnInit {
  title : string ='UpdateFlightComponent';
  flight : Flight =new Flight();
  submitted=false;
  myForm!: FormGroup;
 
  constructor(private flightService: FlightService,
    private router: Router) {
      this.myForm = new FormGroup({
        flightNo: new FormControl('',[Validators.required]),
        flightName: new FormControl('',[Validators.required]),
        seatCapacity: new FormControl('',[Validators.required]),
        departure: new FormControl('',[Validators.required]),
        arrival: new FormControl('',[Validators.required]),
        duration: new FormControl('',[Validators.required]),
      })
     }

  ngOnInit(){
  }
 
  modifyFlight() {
    this.flightService.modifyFlight(this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flight= new Flight();
    this.gotoList();
   
  }

  onSubmit() {
    this.submitted=true;
    this.modifyFlight();
  }

  gotoList() {
    this.router.navigate(['/flights']);
  }
}
