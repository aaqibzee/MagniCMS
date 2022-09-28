import { Injectable } from '@angular/core';
import { Course } from "./course.model";
import { HttpClient } from '@angular/common/http';
import { Constants } from '../shared/Constants';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  formData: Course = new Course();
  courseList: Course[];

  postCourse() {
    return this.http.post(Constants.coursesBase, this.formData);
  }
        
  putCourse() {
    return this.http.put(Constants.coursesBase+'/' + this.formData.Id, this.formData);
  }

  deleteCourse(id:number) {
    return this.http.delete(Constants.coursesBase+'/' + id);
  }

  refreshList() {
    this.http.get(Constants.coursesBase)
      .toPromise()
      .then(res => this.courseList = res as Course[]);
  }
}
