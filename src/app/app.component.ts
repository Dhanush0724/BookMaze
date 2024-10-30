import { Component } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // Reference to the correct HTML template file
  styleUrls: ['./app.component.css']     // Corrected plural property name
})
export class AppComponent {
  title = 'AngFire';
}
