import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Datas } from './../datas';
import { BloggingService } from '../blogging.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink ,CommonModule],
templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
Data : Datas[] = []; 
constructor (public BloggingService : BloggingService, private routes:Router){}
ngOnInit(): void {
this.BloggingService.GetAllUserData().subscribe((data:Datas[])=>{
this.Data=data;
console.log(this.Data);
})}
loginfun(password:any,username:any){
  const user = this.Data.find(user => user.username === username);
  if (user) {
    if (user.password === password) {
      console.log('Login successful');
      alert("login")
      localStorage.setItem("username",user.email )
      localStorage.setItem("userId",user.id)
      this.routes.navigateByUrl('/home')
      window.location.reload()
      return ; 
    } else {
      alert('Incorrect password');
      return false; 
    }
  } else {
    alert('Username not found');
    return false; 
  }
}
}