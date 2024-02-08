import { Injectable } from '@angular/core';
import { Register } from './Model/register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url : string="http://localhost:8083";




  registerUser(register : Register){
    this.http.post(this.url+"/Register",register).subscribe();
    return "Register successfully";
}




  constructor(private http : HttpClient) { }
}

