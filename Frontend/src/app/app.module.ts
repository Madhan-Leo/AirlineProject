import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import {  UserHomeComponent } from './user-home/user-home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import {MatIconModule} from '@angular/material/icon';
import { FlightViewComponent } from './flight-view/flight-view.component';
import { BookingViewComponent } from './booking-view/booking-view.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    FlightListComponent,
    BookingListComponent,
    
    CreateFlightComponent,
    AdminHomeComponent,
    CreateBookingComponent,
    UpdateFlightComponent,
    UpdateBookingComponent,
    UserHomeComponent,
    LoginUserComponent,
    FlightViewComponent,
    BookingViewComponent,
  ],
  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
