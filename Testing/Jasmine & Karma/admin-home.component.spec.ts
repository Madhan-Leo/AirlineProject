import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminHomeComponent } from './admin-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AdminHomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminHomeComponent],
      imports: [
        MatToolbarModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
       
      ],
      providers: [
       
      ],
    }).compileComponents();
  });

    it('Admin Home Component Test', () => {
      const fixture = TestBed.createComponent(AdminHomeComponent);
      const adminhome = fixture.componentInstance;
      expect(adminhome).toBeTruthy();
    });
  
  
    it(`should have as title 'Admin Home Form Component'`, () => {
      const fixture = TestBed.createComponent(AdminHomeComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Airline');
    });
  
});
