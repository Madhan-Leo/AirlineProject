import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateFlightComponent } from './create-flight.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



describe('Insert Flight Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFlightComponent],
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

     

it(`should have as title 'CreateFlightComponent'`, () => {
  const fixture = TestBed.createComponent(CreateFlightComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('CreateFlightComponent');
});




it('Insert Flight Component Test', () => {
  const fixture = TestBed.createComponent(CreateFlightComponent);
  const Flight = fixture.componentInstance;
  expect(Flight).toBeTruthy();
});




it('Insert Flight Form GUI count', () => {
  const fixture = TestBed.createComponent(CreateFlightComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
  const inputElements = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(6);
});

it('Testing Insert Flight Form valid', () => {
  const fixture = TestBed.createComponent(CreateFlightComponent);
  const Flight = fixture.componentInstance;
  const flightFormGroup = Flight.myForm;
  const flightFormValues = {
    flightNo: '',
    flightName: '',
    seatCapacity: '',
    departure: '',
    arrival: '',
    duration: '',
  }
 
 
  expect(flightFormGroup.value).toEqual(flightFormValues);
});

it('Testing Insert Flight Form valid', () => {
  const fixture = TestBed.createComponent(CreateFlightComponent);
  const Flight = fixture.componentInstance;
  Flight.myForm.controls?.['flightNo'].setValue("5");
  Flight.myForm.controls?.['flightName'].setValue("Emirates");
  Flight.myForm.controls?.['seatCapacity'].setValue("150");
  Flight.myForm.controls?.['departure'].setValue("chennai");
  Flight.myForm.controls?.['arrival'].setValue("bangalore");
  Flight.myForm.controls?.['duration'].setValue("5");
 
 
  expect(Flight.myForm.valid).toBeTruthy();
});

});








