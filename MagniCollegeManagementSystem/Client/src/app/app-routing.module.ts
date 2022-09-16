import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';
import {CourseComponent } from './course/course.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'subject', component: SubjectComponent },
   { path: 'course', component: CourseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
