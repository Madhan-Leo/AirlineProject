import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingListComponent } from './booking-list.component';


describe('BookingListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingListComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
       
      ],
      providers: [
       
      ],
    }).compileComponents();
  });
  let component: BookingListComponent;
  let fixture: ComponentFixture<BookingListComponent>;

    it('Booking List  Component Test', () => {
      const fixture = TestBed.createComponent(BookingListComponent);
      const adminhome = fixture.componentInstance;
      expect(adminhome).toBeTruthy();
    });
  
  
    it(`should have as title 'Booking List Form Component'`, () => {
      const fixture = TestBed.createComponent(BookingListComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Booking List Component');
    });
  
});
