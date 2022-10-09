import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from './Constants';
import { Result } from './result.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(
    private http: HttpClient) {
    this.refreshList();
  }

  formData: Result = new Result();
  resultsList: Result[];
  SubjectSelcetValidationMesage: string = '';
  CourseSelcetValidationMesage: string = '';
  StudentSelcetValidationMesage: string = '';

  IsFormInvalid() {
    return this.formData.Course == null
      || this.formData.Student == null
      || this.formData.Subject == null
      || this.formData.Grade == null;
  }

  SetValidationMessages() {
    this.SubjectSelcetValidationMesage = this.formData.Subject == null ? ": Required" : '';
    this.CourseSelcetValidationMesage = this.formData.Course == null ? ": Required" : '';
    this.StudentSelcetValidationMesage = this.formData.Student == null ? ": Required" : '';
  }

  populateForm(student: Result) {
    this.formData = Object.assign({}, student);
  }

  postResult() {
    return this.http.post(Constants.resultsBase, this.formData);
  }

  putResult() {
    return this.http.put(Constants.resultsBase + '/' + this.formData.Id, this.formData);
  }

  deleteResult(id: number) {
    return this.http.delete(Constants.resultsBase + '/' + id);
  }

  refreshList() {
    this.http.get(Constants.resultsBase)
      .toPromise()
      .then(res => this.resultsList = res as Result[]);
  }

  resetFormData() {
    this.formData = new Result();
    this.SubjectSelcetValidationMesage = '';
    this.CourseSelcetValidationMesage = '';
    this.StudentSelcetValidationMesage = '';
  }
  getList() {
    return this.resultsList;
  }
}
