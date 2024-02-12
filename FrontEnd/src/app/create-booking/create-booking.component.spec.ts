import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateBookingComponent } from './create-booking.component'; 
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



describe('Insert Booking Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBookingComponent],
      imports:[
        BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
       
      ]
    }).compileComponents();
  });

     

it(`should have as title 'CreateBookingComponent'`, () => {
  const fixture = TestBed.createComponent(CreateBookingComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('CreateBookingComponent');
});




it('Insert Booking Component Test', () => {
  const fixture = TestBed.createComponent(CreateBookingComponent);
  const Flight = fixture.componentInstance;
  expect(Flight).toBeTruthy();
});




it('Insert Booking Form GUI count', () => {
  const fixture = TestBed.createComponent(CreateBookingComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
  const inputElements = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(5);
});

it('Testing Insert Booking Form valid', () => {
  const fixture = TestBed.createComponent(CreateBookingComponent);
  const Flight = fixture.componentInstance;
  const flightFormGroup = Flight.myForm;
  const flightFormValues = {
    bookingId: '',
    userId: '',
    flightNo: '',
    travellingDate: '',
    noOfTickets: '',
  }
  expect(flightFormGroup.value).toEqual(flightFormValues);
});

it('Testing Insert Flight Form valid', () => {
  const fixture = TestBed.createComponent(CreateBookingComponent);
  const Flight = fixture.componentInstance;
  Flight.myForm.controls?.['bookingId'].setValue("501");
  Flight.myForm.controls?.['userId'].setValue("201");
  Flight.myForm.controls?.['flightNo'].setValue("77345");
  Flight.myForm.controls?.['travellingDate'].setValue("2024-02-12");
  Flight.myForm.controls?.['noOfTickets'].setValue("5");
 
 
  expect(Flight.myForm.valid).toBeTruthy();
});

});








