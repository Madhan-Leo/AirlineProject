import { Component, OnInit } from '@angular/core';
import { Flight } from '../Model/flight';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent  implements OnInit {
  flight : Flight =new Flight();
  submitted=false;
 
  constructor(private flightService: FlightService,
    private router: Router) { }

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
