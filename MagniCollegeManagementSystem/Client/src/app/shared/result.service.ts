import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Constants } from './Constants';
import { Result } from './result.model';
import { SplashScreenStateService } from './splash-screen-state.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  constructor(
    private http: HttpClient,
    private toaster: ToastrService,
    private splashScreenStateService: SplashScreenStateService,) {
    this.refreshList();

    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 1);
  }

  formData: Result = new Result();
  resultsList: Result[];
  SubjectSelcetValidationMesage: string = '';
  CourseSelcetValidationMesage: string = '';
  StudentSelcetValidationMesage: string = '';

  isFormInvalid() {
    return this.formData.Course == null
      || this.formData.Student == null
      || this.formData.Subject == null
      || this.formData.Grade == null
      || this.isDuplicateRecord()
  }

  isDuplicateRecord() {
    return this.resultsList?.filter(
      x => x.Course?.Id == this.formData.Course?.Id
        && x.Student?.Id == this.formData.Student?.Id
        && x.Subject?.Id == this.formData.Subject?.Id
        && this.formData.Id == 0).length > 0;
  }

  setValidationMessages() {
    this.SubjectSelcetValidationMesage = this.formData.Subject == null ? ": Required" : '';
    this.CourseSelcetValidationMesage = this.formData.Course == null ? ": Required" : '';
    this.StudentSelcetValidationMesage = this.formData.Student == null ? ": Required" : '';
    if (this.isDuplicateRecord()) {
      this.toaster.error("Result already exists", "Error", { closeButton: true });
    }
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
