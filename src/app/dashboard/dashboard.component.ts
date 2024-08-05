import { Component } from '@angular/core';
import { Datas } from '../datas';
import { BloggingService } from '../blogging.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule ,RouterLink ] ,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  blogdata : Datas[] = [];
constructor(public BloggingService:BloggingService ,private router : Router){}
ngOnInit(): void {
this.BloggingService.GetAllblogposts().subscribe((blogdata:Datas[])=>{
 this.blogdata= blogdata
console.log(blogdata);
})
}

deletePost(id:string){
  console.log(id);
  this.BloggingService.delete(id).subscribe(res => {
       this.blogdata = this.blogdata.filter(item => item.id !== id);
       console.log('Post deleted successfully!');
        this.blogdata
  })
} 

}
