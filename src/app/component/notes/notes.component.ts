// // notes.component.ts
// import { Component, OnInit } from '@angular/core';
// import { FirebaseService } from '../../firebase.service';

// @Component({
//   selector: 'app-notes',
//   templateUrl: './notes.component.html',
//   styleUrls: ['./notes.component.css']
// })
// export class NotesComponent implements OnInit {
//   questionsAndAnswers: any[] = []; // Add this property

//   constructor(private firebaseService: FirebaseService) {}

//   ngOnInit(): void {
//     this.firebaseService.getQuestionsAndAnswers().subscribe((data) => {
//       this.questionsAndAnswers = data;
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: any[] = [];
  subject: string = '';

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe(params => {
      this.subject = params.get('subject') || '';
      this.loadNotes();
    });
  }

  // Function to load notes from Firebase based on subject
  loadNotes() {
    this.db.list(`/notes/${this.subject}`).valueChanges().subscribe(data => {
      this.notes = data;
    });
  }
}
