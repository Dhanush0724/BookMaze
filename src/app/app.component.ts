import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angfire';
  subject: string = 'Maths';
  chapter: string = 'chapter_1';
  exercise: string = 'exercise_1_1';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlSegments = event.urlAfterRedirects.split('/');
        if (urlSegments[1] === 'notes') {
          this.subject = urlSegments[2];
          this.chapter = urlSegments[3];
          this.exercise = urlSegments[4];
        }
      }
    });
  }
}
