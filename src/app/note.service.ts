import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

interface Note {
  id?: string;  // Optional for identification if needed
  title: string;
  content: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private dbPath = '/notes';

  constructor(private db: AngularFireDatabase) {}

  // Get all notes as an observable
  getNotes(): Observable<Note[]> {
    return this.db.list<Note>(this.dbPath, ref => ref.orderByChild('timestamp')).valueChanges();
  }
}
