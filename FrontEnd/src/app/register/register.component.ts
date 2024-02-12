import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Register } from '../Model/register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'Airline';
  register : Register;
  result : string=" ";
  registerList : Register[] = [];
  myForm: FormGroup;


  constructor(private service : RegisterService){
    this.register = new Register;
    this.myForm = new FormGroup({
      userId:new FormControl('',[Validators.required,Validators.pattern('')]),
      userName:new FormControl('',[Validators.required,Validators.pattern('')]),
      userPhoneno:new FormControl('',[Validators.required,Validators.pattern('')]),
      userEmail:new FormControl('',[Validators.required,Validators.pattern('')]),
      userPassword:new FormControl('',[Validators.required,Validators.pattern('')]),
      userType:new FormControl('',[Validators.required,Validators.pattern('')]),
    })
  }


  

 
  registerUser(data : any){
    this.register.userId = data.userId;
    this.register.userName = data.userName;
    this.register.userPhoneno = data.userPhoneno;
    this.register.userEmail = data.userEmail;
    this.register.userPassword = data.userPassword;
    this.register.userType = data.userType;
   
    this.result = this.service.registerUser(this.register);


  }
}


