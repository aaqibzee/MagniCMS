import { Injectable } from '@angular/core';
import { Subject } from "./subject.model";
import { HttpClient } from '@angular/common/http';
import { CourseService } from './course.service';
import { Course } from './course.model';
import { Constants } from './Constants';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) {
    this.refreshList();
  }

  formData: Subject = new Subject();
  subjectList: Subject[] = null;
  courseDropDownCelectedValue: string = 'Select Course';
  CourseSelcetValidationMesage: string = ': Required';

  resetFormData() {
    this.formData = new Subject();
    this.courseDropDownCelectedValue = 'Select Course';
    this.CourseSelcetValidationMesage = '';
  }

  selectCourse(course: Course) {
    this.courseDropDownCelectedValue = course.Name;
    this.formData.Course = course;
    this.CourseSelcetValidationMesage = '';
  }

  populateForm(subject: Subject) {
    this.courseDropDownCelectedValue = subject.Course.Name;
    this.formData = Object.assign({}, subject);
  }

  postSubject() {
    return this.http.post(Constants.subjectsBase, this.formData);
  }

  putSubject() {
    return this.http.put(Constants.subjectsBase + '/' + this.formData.Id, this.formData);
  }

  deleteSubject(id: number) {
    return this.http.delete(Constants.subjectsBase + '/' + id);
  }

  refreshList() {
    this.http.get(Constants.subjectsBase)
      .toPromise()
      .then(res => this.subjectList = res as Subject[]);
  }
  getList() {
    return this.subjectList;
  }
}
