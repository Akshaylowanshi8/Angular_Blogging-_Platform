import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Datas } from './../datas';
import { BloggingService } from '../blogging.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink ,CommonModule ],
templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
Data : Datas[] = []; 
constructor (
  public BloggingService : BloggingService,
   private routes:Router
  
  
  ){}

  toastr=inject(ToastrService)

ngOnInit(): void {
this.BloggingService.GetAllUserData().subscribe((data:Datas[])=>{
this.Data=data;
console.log(this.Data);
})}

loginfun(password:any,username:any){
  const user = this.Data.find(user => user.username === username);
  if (user) {
    if (user.password === password) {
      Swal.fire('Thank you...', 'Login succesfully!', 'success')
      localStorage.setItem("username",user.email )
      localStorage.setItem("userId",user.id)
      this.routes.navigateByUrl('/home')

      setTimeout(() => {
        window.location.reload()
      }, 2000);

  
    } else {

      Swal.fire(
        'Cancelled',
        'Incorrect password:)',
        'error'
      )
      return false; 
    }
  } else {
    Swal.fire(
      'Cancelled',
      'Username not found:)',
      'error'
    )
  
    return false; 
  }

  return
}





  showSuccess() {
  }
}
