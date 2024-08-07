import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BloggingService } from './../blogging.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink ,ReactiveFormsModule ,CommonModule],
  
templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor( public BloggingService:BloggingService, 
    private router: Router
  ){}
 Registrform !:FormGroup;
 isformvalid:Boolean =false ;


ngOnInit(): void {

console.log( this.isformvalid);
  
  this.Registrform = new FormGroup(
  {
     username:new FormControl("",[Validators.required, Validators.minLength(5)]), 
     email:new FormControl("", [Validators.required ,Validators.email,] ),
     password:new FormControl("", [Validators.required , Validators.maxLength(10)] ) 
  }
)
}


  Regfun(){
    const isformvalid =this.Registrform.valid;
    if (!isformvalid){
      
   return 
    }
console.log(isformvalid);
    this.isformvalid=true ;
    this.BloggingService.Registruser(this.Registrform.value).subscribe((res:any)=>{
      Swal.fire('Thank you...', 'user created succesfully!', 'success')
      this.router.navigateByUrl("/login")
    })
  }
}
