import { Component } from '@angular/core';
import { BloggingService } from '../blogging.service';

import { Router } from '@angular/router';
import { Datas } from '../datas';
import { CommonModule, JsonPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  blogdata : Datas[] = [];

 

constructor(public BloggingService:BloggingService ,private router : Router){}

ngOnInit(): void {

this.BloggingService.GetAllblogposts().subscribe((blogdata:Datas[])=>{
 this.blogdata= blogdata

})
console.log(this.blogdata);

}
}
