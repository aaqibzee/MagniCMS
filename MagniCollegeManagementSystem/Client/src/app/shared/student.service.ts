import { Injectable } from '@angular/core';
import { Student } from "./student.model";
import { HttpClient } from '@angular/common/http';
import { CourseService } from "./course.service";
import { SubjectService } from './subject.service';
import { Constants } from './Constants';
import { SplashScreenStateService } from './splash-screen-state.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsList: Student[];

  constructor(
    private http: HttpClient,
    public courseService: CourseService,
    public subjectService: SubjectService,
    private splashScreenStateService: SplashScreenStateService,
  ) {
    this.refreshList();
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 1);
  }

  private listDataUpdatedSource = new Subject<Student[]>();
  private formDataUpdatedSource = new Subject<Student>();
  private resetFormDataUpdatedSource = new Subject<number>();
  public sourceList$ = this.listDataUpdatedSource.asObservable();
  public formData$ = this.formDataUpdatedSource.asObservable();
  public resetFormData$ = this.resetFormDataUpdatedSource.asObservable();

  notifyListUpdate() {
    this.listDataUpdatedSource.next(this.studentsList);
  }

  populateForm(formData: Student) {
    this.formDataUpdatedSource.next(formData);
  }

  resetFormData(id: number) {
    this.resetFormDataUpdatedSource.next(id);
  }

  postStudent(formData: Student) {
    return this.http.post(Constants.studentsBase, formData);
  }

  putStudent(formData: Student) {
    return this.http.put(Constants.studentsBase + '/' + formData.Id, formData);
  }

  deleteStudent(id: number) {
    return this.http.delete(Constants.studentsBase + '/' + id);
  }

  refreshList() {
    this.http.get(Constants.studentsBase)
      .toPromise()
      .then(res => this.studentsList = res as Student[])
      .then(res => this.notifyListUpdate());
  }

  getList() {
    return this.studentsList;
  }
}