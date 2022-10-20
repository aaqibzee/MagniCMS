import { Injectable } from '@angular/core';
import { Teacher } from "./teacher.model";
import { HttpClient } from '@angular/common/http';
import { SubjectService } from './subject.service';
import { Constants } from './Constants';
import { SplashScreenStateService } from './splash-screen-state.service';
import { Subject as SubjectObserveable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient,
    public subjectService: SubjectService,
    private splashScreenStateService: SplashScreenStateService,) {
    subjectService.refreshList();
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 1);
  }

  teacherList: Teacher[] = [];

  private listDataUpdatedSource = new SubjectObserveable<Teacher[]>();
  private formDataUpdatedSource = new SubjectObserveable<Teacher>();
  private resetFormDataUpdatedSource = new SubjectObserveable<number>();
  private closeModalUpdatedSource = new SubjectObserveable<boolean>();

  public sourceList$ = this.listDataUpdatedSource.asObservable();
  public formData$ = this.formDataUpdatedSource.asObservable();
  public resetFormData$ = this.resetFormDataUpdatedSource.asObservable();
  public closeModal$ = this.closeModalUpdatedSource.asObservable();

  closeModal() {
    this.closeModalUpdatedSource.next(true);
  }

  notifyListUpdate() {
    this.listDataUpdatedSource.next(this.teacherList);
  }

  populateForm(formData: Teacher) {
    this.formDataUpdatedSource.next(formData);
  }

  resetFormData(id: number) {
    this.resetFormDataUpdatedSource.next(id);
  }

  postTeacher(formData: Teacher) {
    return this.http.post(Constants.teachersBase, formData);
  }

  putTeacher(formData: Teacher) {
    return this.http.put(Constants.teachersBase + '/' + formData.Id, formData);
  }

  deleteTeacher(id: number) {
    return this.http.delete(Constants.teachersBase + '/' + id);
  }

  refreshList() {
    this.http.get(Constants.teachersBase)
      .toPromise()
      .then(res => this.teacherList = res as Teacher[])
      .then(res => this.notifyListUpdate());
  }

  getList() {
    return this.teacherList;
  }
}