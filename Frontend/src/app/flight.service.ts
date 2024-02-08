import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  private Url : string = 'http://localhost:8083';
 
 

  addFlight(flight: Object): Observable<Object> {
    return this.http.post(`${this.Url}/addFlight`, flight);
     
  }
 

  modifyFlight(flight: Object): Observable<Object> {
    return this.http.put(`${this.Url}/modifyFlight`, flight);
     
  }

  removeFlight(flightNo: String): Observable<any> {
    return this.http.delete(`${this.Url}/removeFlight/${flightNo}`, { responseType: 'text' });
  }

  viewAllFlight(): Observable<any> {
    return this.http.get(`${this.Url}/viewAllFlight`);
  }
}
