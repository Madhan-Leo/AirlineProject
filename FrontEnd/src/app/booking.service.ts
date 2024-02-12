import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private Url : string = 'http://localhost:8083';
  constructor(private http: HttpClient) { }

  getBooking(bookingId: number): Observable<any> {
    return this.http.get(`${this.Url}/getBooking/${bookingId}`);
  }

  addBooking(booking: Object): Observable<Object> {
    return this.http.post(`${this.Url}/addBooking`, booking);
  }

  updateBooking(booking: Object): Observable<Object> {
    return this.http.put(`${this.Url}/updateBooking`, booking);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.Url}/deleteBooking/${id}`, { responseType: 'text' });
  }

  getBookingsList(): Observable<any> {
    return this.http.get(`${this.Url}/getBookingsList`);
  }
}

