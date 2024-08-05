import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent ,FooterComponent ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blogging_Platform';

 username = localStorage.getItem("username");
  ngOnInit(): void {
     if (this.username !== null) {
    console.log(this.username); 
  } else {
    console.log('No value found for the key');
  }
  }
  logout()
  {
    // confirm("are you sour..")
    // localStorage.clear();
    // window.location.reload()



    const userConfirmed = confirm("Are you sure you want to log out?");
  
    if (userConfirmed) {
      localStorage.clear();
      window.location.reload();
    } else {
      alert("Logout has been canceled.");
    }
  }
 

 

 

}
