import { Injectable } from '@angular/core';
import { Student } from "./student.model";
import { HttpClient } from '@angular/common/http';
import { CourseService } from "./course.service";
import { Course } from './course.model';
import { SubjectService } from './subject.service';
import { Subject } from './subject.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient,
    public courseService: CourseService,
    public subjectService: SubjectService)
  {
    courseService.refreshList();
    subjectService.refreshList();
   }

  formData: Student = new Student();
  studentsList: Student[];
  selectedSubjects: Subject[];
  subjectsList = [];
  
  readonly baseUrl = '/api/';
  readonly courseDropDownDefaultValue= 'Select Course';
  courseDropDownCelectedValue: string = this.courseDropDownDefaultValue;
   

  resetFormData()
  {
    this.formData = new Student();
    this.courseDropDownCelectedValue = this.courseDropDownDefaultValue;
    this.selectedSubjects = null;
    this.subjectsList =  null;
  }
 
  selectCourse(course: Course) {
     this.courseDropDownCelectedValue = course.Name;
    this.formData.Course = course;
    this.subjectsList = this.subjectService.getList().filter(x=>x.Course?.Id==course?.Id);
  }
  
  populateForm(student: Student) {
    this.courseDropDownCelectedValue = student.Course.Name;
    this.formData = Object.assign({}, student);
    this.subjectsList = this.subjectService.getList().filter(x=>x.Course?.Id==student.Course?.Id);
    this.selectedSubjects = this.formData.Subjects;
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