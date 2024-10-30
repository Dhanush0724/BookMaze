// notes.component.ts
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  questionsAndAnswers: any[] = []; // Add this property

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getQuestionsAndAnswers().subscribe((data) => {
      this.questionsAndAnswers = data;
    });
  }
}
