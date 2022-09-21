import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

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
import { GradeFormComponent } from './grade/grade-form/grade-form.component';
import { GradeComponent } from './grade/grade.component';

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
    CourseFormComponent,
    GradeFormComponent,
    GradeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
