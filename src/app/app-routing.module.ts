import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ExamFormComponent } from './components/exam-form/exam-form.component';
import { Exam } from './datamodel/Exam';
import { QuestionFormComponent } from './components/question-form/question-form.component';

const routes: Routes = [
  {path:'',redirectTo:'adminhome',pathMatch:'full'},
  {path:'adminhome', component:AdminHomeComponent},
  {path:'formEditAdd', component:ExamFormComponent},
  {path:'formQuestion', component:QuestionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
