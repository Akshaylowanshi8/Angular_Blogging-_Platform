import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BloggingService } from './../blogging.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newblogg',
  standalone: true,
  imports: [ReactiveFormsModule ,RouterLink ],
templateUrl: './newblogg.component.html',
  styleUrl: './newblogg.component.css'
})
export class NewbloggComponent {

  constructor( public BloggingService:BloggingService, 
    private router: Router
  ){}
  Addblogform!:FormGroup;


  ngOnInit(): void {

     const userid =localStorage.getItem("userId")
     console.log(userid);
     
    this.Addblogform = new FormGroup(
    {
       userId:new FormControl(userid,Validators.required ), 
       summary:new FormControl("",Validators.required ),
       title:new FormControl("",Validators.required ) ,
       content:new FormControl("",Validators.required ) ,
       comments:new FormControl([], ) 
    }
  )
  }

  Addfun(){

    console.log(this.Addblogform.value);
    this.BloggingService.Addblogg(this.Addblogform.value).subscribe((res:any)=>{
      Swal.fire('Thank you...', 'post create  succesfully!', 'success')
      this.router.navigateByUrl("/desh")
    })
    }

  }