import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  rating: number= 0;
  feedback : string = '';

  constructor(private auth : AuthService) { }


  logout() {
    this.auth.logout()
  }
  subjects() {
    this.auth.subjects()
  }

 

}