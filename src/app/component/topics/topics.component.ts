import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-topics',
  
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css'
})
export class TopicsComponent {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  notes() {
    this.auth.notes()
  }
}
