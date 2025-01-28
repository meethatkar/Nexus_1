import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { title } from 'process';
import { UserSignupComponent } from './components/logins/user-signup/user-signup.component';
import { UserLoginComponent } from './components/logins/user-login/user-login.component';
import { ManagerSignupComponent } from './components/logins/manager-signup/manager-signup.component';
import { MemberSignupComponent } from './components/logins/member-signup/member-signup.component';

export const routes: Routes = [
    {
        path:"",redirectTo:'home',pathMatch:'full'
    },
    {
        path:'home',component:HomeComponent,title:'Home'
    },
    {
        path:'userSignup',component:UserSignupComponent,title:'Signup'
    },
    {
        path:'userLogin',component:UserLoginComponent,title:'Login'
    },
    {
        path:'createProject',component:ManagerSignupComponent,title:'create project'
    },
    {
        path:'joinProject',component:MemberSignupComponent,title:'join project'
    }
];
