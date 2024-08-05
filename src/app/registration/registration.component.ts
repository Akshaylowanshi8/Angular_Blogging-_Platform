import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BloggingService } from './../blogging.service';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink ,ReactiveFormsModule],
  
templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor( public BloggingService:BloggingService, 
    private router: Router
  ){}
 Registrform !:FormGroup;

ngOnInit(): void {

  this.Registrform = new FormGroup(
  {
     username:new FormControl("",Validators.required ), 
     email:new FormControl("",Validators.required ),
     password:new FormControl("",Validators.required ) 
  }
)
}
  Regfun(){
    console.log(this.Registrform.value);
    this.BloggingService.Registruser(this.Registrform.value).subscribe((res:any)=>{
      alert("created user successfully!");
      this.router.navigateByUrl("/login")
    })
  }
}
