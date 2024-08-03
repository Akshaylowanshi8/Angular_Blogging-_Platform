import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
constructor (public BloggingService : BloggingService){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.BloggingService.GetAllUserData().subscribe((data:Datas[])=>{
this.Data=data;
console.log(this.Data);
 })
}

}




