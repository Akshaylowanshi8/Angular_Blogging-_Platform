import { Component } from '@angular/core';
import { Datas } from '../datas';
import { BloggingService } from '../blogging.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

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

  const userId = localStorage.getItem("userId");
console.log(userId);
  this.BloggingService.GetAllblogposts().subscribe((blogdata: Datas[]) => {
    this.blogdata = blogdata.filter(blog => blog.userId === userId);
    console.log(this.blogdata);
});

console.log(this.blogdata);
}




deletePost(id:string){
  console.log(id);
          Swal.fire({
          title: 'Are you sure want to remove?',
          text: 'You will not be able to recover this file!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Deleted!',
              'Your imaginary file has been deleted.',
              'success'
            )
            this.BloggingService.delete(id).subscribe(res => {
              this.blogdata = this.blogdata.filter(item => item.id !== id);
               this.blogdata
              })
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
            return
          }
        })

} 

}
