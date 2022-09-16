import { Injectable } from '@angular/core';
import { Course } from "./course.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  formData: Course = new Course();
  courseList: Course[];
  readonly baseUrl = '/api/'
  readonly endpoint='courses'

  postCourse() {
    return this.http.post(this.baseUrl+this.endpoint, this.formData);
  }

  putCourse() {
    return this.http.put(this.baseUrl + this.endpoint+'/' + this.formData.Id, this.formData);
  }

  deleteCourse(id:number) {
    return this.http.delete(this.baseUrl + this.endpoint+'/' + id);
  }

  refreshList() {
    this.http.get(this.baseUrl+ this.endpoint)
      .toPromise()
      .then(res => this.courseList = res as Course[]);
  }
}
