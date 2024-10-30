
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-subjects',
  
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {

  

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  topics() {
    this.auth.topics()
  }
}
