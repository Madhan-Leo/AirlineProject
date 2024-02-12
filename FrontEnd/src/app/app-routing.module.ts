import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';

import { UserHomeComponent } from './user-home/user-home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { FlightViewComponent } from './flight-view/flight-view.component';
import { BookingViewComponent } from './booking-view/booking-view.component';


const routes: Routes = [
  {path :'',component : HomeComponent},
  {path :'register', component : RegisterComponent},
  {path :'home', component : HomeComponent},
  {path :'flight-list', component : FlightListComponent},
  {path :'create-flight', component : CreateFlightComponent},
  {path :'create-booking', component : CreateBookingComponent},
  {path :'admin-home', component : AdminHomeComponent},
  {path :'update-flight', component : UpdateFlightComponent},
  {path :'booking-list', component : BookingListComponent},
  {path :'user-home', component : UserHomeComponent},
  {path :'update-booking', component : UpdateBookingComponent},
  {path :'login-user', component : LoginUserComponent},
  {path :'flight-view', component : FlightViewComponent},
  {path :'booking-view', component : BookingViewComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
