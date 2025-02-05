import { Component } from '@angular/core';
import { user } from '../../../Models/user.model';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  imports: [FormsModule],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css'
})
export class UserSignupComponent {
  userObj : user = new user();
  constructor(private router:Router){}
  
  OnSubmit(){
    console.log("Done");
    console.log(this.userObj.userEmail);
    console.log(this.userObj.userName);
    console.log(this.userObj.userPassword);
    alert("Wnat to proceed");
    this.router.navigate(['']);
  }

  OnReset(){
    this.userObj.userEmail="";
    this.userObj.userName="";
    this.userObj.userPassword="";
  }
}
