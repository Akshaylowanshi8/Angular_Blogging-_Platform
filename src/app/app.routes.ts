import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';
import { NewbloggComponent } from './newblogg/newblogg.component';
import { EditpostComponent } from './editpost/editpost.component';

export const routes: Routes = [
    {path:"",
        component:HomeComponent},
    {path:"home",
        component:HomeComponent},
    {
        path:"login" ,
        component:LoginComponent
    },
    {
        path:"registation" ,
        component:RegistrationComponent
    },
    {
        path:"desh",component:DashboardComponent,canActivate:[authGuard]
    },
    {
        path:"newblog",component:NewbloggComponent
    },
{
    path :"editpost/:id" ,component :EditpostComponent
}
];

