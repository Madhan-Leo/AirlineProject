import { Component, OnInit } from '@angular/core';
import { Flight } from '../Model/flight';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls:['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {
  title : string ='CreateFlightComponent';
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
  newFlight(): void{
    this.submitted=false;
    this.flight=new Flight();
  }
  save() {
    this.flightService.addFlight(this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flight= new Flight();
    this.gotoList();
   
  }

  onSubmit() {
    this.submitted=true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/flights']);
  }
}

