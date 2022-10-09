import { Injectable } from '@angular/core';
import { Grade } from "./grade.model";
import { HttpClient } from '@angular/common/http';
import { Constants } from './Constants';
import { CourseService } from './course.service';
import { SubjectService } from './subject.service';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http: HttpClient) {
    this.refreshList();
  }
  CourseSelcetValidationMesage: string = '';
  formData: Grade = new Grade();
  gradesList: Grade[];

  resetFormData() {
    this.formData = new Grade();
    this.CourseSelcetValidationMesage = '';
  }
  postGrade() {
    return this.http.post(Constants.gradesBase, this.formData);
  }

  putGrade() {
    return this.http.put(Constants.gradesBase + '/' + this.formData.Id, this.formData);
  }

  deleteGrade(id: number) {
    return this.http.delete(Constants.gradesBase + '/' + id);
  }

  refreshList() {
    this.http.get(Constants.gradesBase)
      .toPromise()
      .then(res => this.gradesList = res as Grade[]);
  }

  getList() {
    return this.gradesList;
  }
}
