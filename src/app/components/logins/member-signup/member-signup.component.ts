import { Component } from '@angular/core';
import { member } from '../../../Models/member.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-signup',
  imports: [FormsModule],
  templateUrl: './member-signup.component.html',
  styleUrl: './member-signup.component.css'
})
export class MemberSignupComponent {
  memberObj: member= new member();

  constructor(private router:Router){}

  OnSubmit(){
    console.log("Done ");
    console.log(this.memberObj.prjId);
    console.log(this.memberObj.prjName);
    alert("Want to procced ? ");
    this.router.navigate(['']);
  }

  OnReset(){
    this.memberObj.prjName="";
    this.memberObj.prjId=0
  }

}
