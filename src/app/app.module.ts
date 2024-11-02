import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//added below new
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { SubjectsComponent } from './component/subjects/subjects.component';
import { TopicsComponent } from './component/topics/topics.component';
import { NotesComponent } from './component/notes/notes.component';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { NoteService } from './note.service';  // Correct path based on your structure


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SubjectsComponent,
    TopicsComponent,
    NotesComponent,
  
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  providers: [
    provideClientHydration(),
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
