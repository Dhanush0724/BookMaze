import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private db: AngularFireDatabase) {}

  getNotes(path: string): Observable<any> {
    return this.db.object(path).valueChanges();
  }
}
