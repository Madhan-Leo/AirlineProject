import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../Model/flight';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-view',
  templateUrl: './flight-view.component.html',
  styleUrls: ['./flight-view.component.css']
})
export class FlightViewComponent implements OnInit {
  flights!: Observable<Flight[]>;
  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData()
  {
    this.flights=this.flightService.viewAllFlight();
  }
  removeFlight(flightNo: String)
  {
    this.flightService.removeFlight(flightNo)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error));
  }
  flightDetails(flightNo:String)
  {
    this.router.navigate(['flightDetails',flightNo]);
  }
  modifyFlight(flightNo: String)
  {
    this.router.navigate(['updateFlight',flightNo]);
  }
}


