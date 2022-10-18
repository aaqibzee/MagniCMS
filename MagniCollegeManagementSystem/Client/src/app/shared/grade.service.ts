import { Injectable } from '@angular/core';
import { Grade } from "./grade.model";
import { HttpClient } from '@angular/common/http';
import { Constants } from './Constants';
import { SplashScreenStateService } from './splash-screen-state.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http: HttpClient,
    private splashScreenStateService: SplashScreenStateService,) {
    this.refreshList();
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 1);
  }

  private gradesList: Grade[];
  private gradeDataUpdatedSource = new Subject<Grade[]>();
  private formDataUpdatedSource = new Subject<Grade>();
  sourceList$ = this.gradeDataUpdatedSource.asObservable();
  formData$ = this.formDataUpdatedSource.asObservable();

  sendGradeData() {
    this.gradeDataUpdatedSource.next(this.gradesList);
  }

  sendFormData(formData: Grade) {
    this.formDataUpdatedSource.next(formData);
  }

  postGrade(formData: Grade) {
    return this.http.post(Constants.gradesBase, formData);
  }

  putGrade(formData: Grade) {
    return this.http.put(Constants.gradesBase + '/' + formData.Id, formData);
  }

  deleteGrade(id: number) {
    return this.http.delete(Constants.gradesBase + '/' + id);
  }

  refreshList() {
    this.http.get(Constants.gradesBase)
      .toPromise()
      .then(res => this.gradesList = res as Grade[])
      .then(x => this.sendGradeData());
  }

  getList() {
    return this.gradesList;
  }
}
