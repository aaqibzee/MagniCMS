import { Injectable } from '@angular/core';
import { Student } from "./student.model";
import { HttpClient } from '@angular/common/http';
import { CourseService } from "./course.service";
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, public courseService: CourseService) {
    courseService.refreshList();
   }

  formData: Student = new Student();
  studentsList: Student[];
  readonly baseUrl = '/api/';

   courseDropDownCelectedValue: string = 'Select Course';
   course: Course;
 
  selectCourse(course: Course) {
     this.courseDropDownCelectedValue = course.Name;
     this.course = course;
  }
  
  populateForm(student: Student) {
    this.courseDropDownCelectedValue = student.Course.Name;
    this.formData = Object.assign({}, student);
  }

  postStudent() {
    return this.http.post(this.baseUrl+'students', this.formData);
  }

  putStudent() {
    return this.http.put(this.baseUrl + 'students/' + this.formData.Id, this.formData);
  }

  deleteStudent(id:number) {
    return this.http.delete(this.baseUrl + 'students/' + id);
  }

  refreshList() {
    this.http.get(this.baseUrl + 'students')
      .toPromise()
      .then(res => this.studentsList = res as Student[]);
  }
}