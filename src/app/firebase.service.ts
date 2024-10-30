// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  // Method to get questions and answers
  getQuestionsAndAnswers(): Observable<any[]> {
    return this.db.list('/').valueChanges();
  }
}
