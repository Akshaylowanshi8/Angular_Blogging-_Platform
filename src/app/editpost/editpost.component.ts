import { Component } from '@angular/core';
import { BloggingService } from '../blogging.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Datas } from './../datas';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editpost',
  standalone: true,
  imports: [ ReactiveFormsModule ,CommonModule ,RouterLink],
templateUrl: './editpost.component.html',
  styleUrl: './editpost.component.css'
})
export class EditpostComponent {

  constructor( public BloggingService:BloggingService, 
    private router: Router,
    private activerouter :ActivatedRoute,
    
  
  ){}
  Addblogform!:FormGroup;
  postd : any = "";
 id:number = 0;


  ngOnInit(): void {
    
this.activerouter.paramMap.subscribe(res=>{
  let pid = res.get('id')
  this.BloggingService.GetEditPost(pid).subscribe((data:Datas )=>{ 
    this.id =(data.id);
    const datas  = data;
  this.postd = datas
    })  
})

// console.log(this.postd);
     
     const userid =localStorage.getItem("userId")
     console.log(this.id);
    this.Addblogform = new FormGroup(
    {
       userId:new FormControl(userid,Validators.required ), 
       summary:new FormControl("",Validators.required ),
       title:new FormControl("",Validators.required ) ,
       content:new FormControl("",Validators.required ) ,
       comments:new FormControl([],Validators.required ) 
    }
  )
  }

  get f(){
    return this.Addblogform.controls;
  }
  Addfun(){
    console.log(this.Addblogform.value);  
      this.BloggingService.updatepost(this.id, this.Addblogform.value).subscribe((res:any) => {
        Swal.fire(
          'Updated!',
          'Your post has been updated ',
          'success'
        )
           this.router.navigateByUrl('/desh');
      })
    }

}
