import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserSignupComponent } from './components/logins/user-signup/user-signup.component';
import { UserLoginComponent } from './components/logins/user-login/user-login.component';
import { QuestionComponent } from './components/logins/question/question.component';
import { ManagerSignupComponent } from './components/logins/manager-signup/manager-signup.component';
import { MemberSignupComponent } from './components/logins/member-signup/member-signup.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nexus';
}
