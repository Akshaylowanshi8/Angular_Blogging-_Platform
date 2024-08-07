import { Component, SimpleChanges } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent ,FooterComponent ,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
constructor(  private routes:Router){}

  title = 'Blogging_Platform';
 username = localStorage.getItem("username");
  ngOnInit(): void {
     if (this.username !== null) {
    console.log(this.username); 
  } else {
    console.log('No value found for the key');
  }}

  logout()
  {
   
    Swal.fire({
      title: 'Are you sure want to Logout ?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, yes it!',
      cancelButtonText: 'No, keep it'


    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Logout!',
          // 'Your imaginary file has been deleted.',
          'success'
        )

        localStorage.clear();
      this.routes.navigateByUrl('/home')
        setTimeout(() => {
          window.location.reload()
        }, 2000);

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Logout has been canceled',
          'error'
        )
      }
    })
  }

  }
 

