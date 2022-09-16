import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectFormComponent } from './subject/subject-form/subject-form.component';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course/course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentFormComponent,
    TeacherComponent,
    TeacherFormComponent,
    SubjectComponent,
    SubjectFormComponent,
    CourseComponent,
    CourseFormComponent
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
