import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from './Constants';
import { CourseService } from './course.service';
import { GradeService } from './grade.service';
import { Result } from './result.model';
import { StudentService } from './student.service';
import { SubjectService } from './subject.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(
    private http: HttpClient) { 
    }

  formData: Result = new Result();
  resultsList: Result[];

   populateForm(student: Result) {
    this.formData = Object.assign({}, student);
  }

  postResult() {
    return this.http.post(Constants.resultsBase, this.formData);
  }

  putResult() {
    return this.http.put(Constants.resultsBase+'/' + this.formData.Id, this.formData);
  }

  deleteResult(id:number) {
    return this.http.delete(Constants.resultsBase + '/' + id);
  }

  refreshList() {
    this.http.get(Constants.resultsBase)
      .toPromise()
      .then(res => this.resultsList = res as Result[]);
  }

  resetFormData()
  {
    this.formData = new Result();
  }

   getList()
  {
    this.refreshList();
    return this.resultsList;
  }
}
