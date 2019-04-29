import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './login/login.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { LeaveComponent } from './leave/leave.component';
import { LLeaveComponent } from './lleave/lleave.component';
import { AppComponent } from './app.component';

//Array of Routes in application
const routes: Routes = [
  {path : 'lleave' ,component:LeaveComponent},
  {path : 'batches', component:BatchesComponent},
  {path : 'leave' ,component:LeaveComponent}, 
  
  {path : 'subjects' ,component:SubjectsComponent},
  //Add on default path
  { path: '', component:BatchesComponent},
  {path : 'login' ,component:LoginComponent},
      
  // It is our Widcard component
  {path : '**', component:InvalidPageComponent}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
