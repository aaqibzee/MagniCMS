import { Injectable } from '@angular/core';
import { Subject } from "./subject.model";
import { HttpClient } from '@angular/common/http';
import { CourseService } from './course.service';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient,
  public courseService: CourseService) { }

  formData: Subject = new Subject();
  subjectList: Subject[];
  readonly baseUrl = '/api/'
  readonly endpoint = 'subjects'
  courseDropDownCelectedValue: string = 'Select Course';

  
  resetFormData()
  {
    this.formData = new Subject();
    this.courseDropDownCelectedValue = 'Select Course';
  }

   selectCourse(course: Course) {
     this.courseDropDownCelectedValue = course.Name;
     this.formData.Course = course;
  }

  populateForm(subject: Subject) {
    this.courseDropDownCelectedValue = subject.Course.Name;
    this.formData = Object.assign({}, subject);
  }s

  postSubject() {
    return this.http.post(this.baseUrl+this.endpoint, this.formData);
  }

  putSubject() {
    return this.http.put(this.baseUrl + this.endpoint+'/' + this.formData.Id, this.formData);
  }

  deleteSubject(id:number) {
    return this.http.delete(this.baseUrl + this.endpoint+'/' + id);
  }

  refreshList() {
    this.http.get(this.baseUrl+ this.endpoint)
      .toPromise()
      .then(res => this.subjectList = res as Subject[]);
  }
  getList()
  {
    this.refreshList();
    return this.subjectList;
  }
}
