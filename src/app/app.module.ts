import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ExamFormComponent } from './components/exam-form/exam-form.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    ExamFormComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
