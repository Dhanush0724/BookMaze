import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SubjectsComponent } from './component/subjects/subjects.component';
import { TopicsComponent } from './component/topics/topics.component';
import { NotesComponent } from './component/notes/notes.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'notes', component: NotesComponent },
  
  // Route for specific subject, chapter, and exercise
  { path: 'notes/:subject/:chapter/:exercise', component: NotesComponent },

  // Route for specific subject only
  { path: 'notes/:subject', component: NotesComponent },

  // Catch-all route for any undefined paths
  { path: '**', redirectTo: '/notes/Maths/chapter_1/exercise_1_1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
