import { Component } from '@angular/core';
import { User } from '../Model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
    title = 'Airline';
  users : User;
  result : string=" ";
  myForm: FormGroup;


  constructor(private service : UserService,private router : Router){
    this.users = new User;
    this.myForm = new FormGroup(
      {
        userEmail:new FormControl('',[Validators.required,Validators.pattern('')]),
        userPassword:new FormControl('',[Validators.required,Validators.pattern('')])
      }
    )
  }

  loginUser(data:any){
    this.users.userEmail=data.userEmail;
    this.users.userPassword=data.userPassword;
 
   this.service.loginUser(this.users).subscribe(
     (resultdata:any)=> {
       console.log(resultdata)
       if(resultdata.message=="Admin Login Successfully"){
        this.router.navigate(['/admin-home']);
     } else if(resultdata.message=="User Login Successfully"){
       this.router.navigate(['/user-home']);
     }
     else{
       alert("Invalid User");
     }
   }
  );


 
  }
}
