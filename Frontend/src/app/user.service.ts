import { Injectable } from '@angular/core';
import { User } from './Model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string="http://localhost:8083/user";


  registerUser(user : User){
    this.http.post(this.url+"/insertUsers",user).subscribe();
    return "Register successfully";
}

loginUser(user : any){
  return this.http.post(this.url+"/login",user);
}

  constructor(private http : HttpClient) { }
}
