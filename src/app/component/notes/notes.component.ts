import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: any[] = [];
  subject: string = '';
  chapter: string = '';
  exercise: string = '';
  noNotesAvailable: boolean = false;
  chapterSelected: boolean = false;  // Declare chapterSelected
  exerciseSelected: boolean = false;  // Declare exerciseSelected

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private cdr: ChangeDetectorRef  
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.subject = params['subject'];
      this.chapter = params['chapter'];
      this.exercise = params['exercise'];
      
      // Check if chapter and exercise are selected
      this.chapterSelected = !!this.chapter;
      this.exerciseSelected = !!this.exercise;
  
      // Load notes if exercise is specified
      if (this.subject && this.chapter && this.exercise) {
        this.loadNotes();
      }
    });
  }

  loadNotes() {
    const path = `/notes/class_10/ncert/${this.subject}/${this.chapter}/${this.exercise}`;
    console.log('Firebase path:', path);
  
    this.noteService.getNotes(path).subscribe(
      (data: any) => {
        console.log('Data received from Firebase:', data);
  
        if (data) {
          this.notes = [];
  
          // Loop through the entries and look for pairs
          for (let i = 1; ; i++) {
            const questionKey = `${i}Q`;
            const answerKey = `${i}A`;
  
            // Stop if we can't find the next Q or A key
            if (!(questionKey in data) || !(answerKey in data)) {
              break;
            }
  
            // Push the found question and answer pair to notes
            this.notes.push({ question: data[questionKey], answer: data[answerKey] });
          }
  
          this.noNotesAvailable = this.notes.length === 0;
        } else {
          this.noNotesAvailable = true;
        }
  
        console.log('Processed notes:', this.notes);
        this.cdr.detectChanges();
      },
      error => {
        console.error("Error loading notes:", error);
        this.noNotesAvailable = true;
      }
    );
  }
}
