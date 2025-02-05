import { Component } from '@angular/core';
import { user } from '../../../Models/user.model';
import { project } from '../../../Models/project.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manager-signup',
  imports: [FormsModule],
  templateUrl: './manager-signup.component.html',
  styleUrl: './manager-signup.component.css'
})
export class ManagerSignupComponent {

  constructor(private router:Router){}
  prjObj:project = new project();

  OnSignup(){
    console.log("done");
    console.log(this.prjObj.projectDesc);
    console.log(this.prjObj.projectName);
    alert("Want to proceed or exit ?")
    this.router.navigate(['']);
  }

  OnReset(){
    this.prjObj.projectName="";
    this.prjObj.projectDesc="";
  }
}
