import { Injectable } from '@angular/core';
import { Teacher } from "./teacher.model";
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject.model';
import { SubjectService } from './subject.service';
import { Constants } from './Constants';
import { Course } from './course.model';
import { SplashScreenStateService } from './splash-screen-state.service';

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
  formData: Teacher = new Teacher();
  teacherList: Teacher[] = [];
  readonly genderOptions: string[] = ['Male', 'Female', 'Other'];
  selectedCourses: Course[] = [];
  selectedSubjects: Subject[] = [];
  subjectsForSelectedCourses: Subject[] = [];

  resetFormData() {
    this.formData = new Teacher();
    this.selectedSubjects = [];
    this.selectedCourses = [];
    this.subjectsForSelectedCourses = [];
  }

  onCourseSelect(item: Course) {
    var list = this.subjectService.getList().filter(x => x.Course.Id == item.Id);
    this.subjectsForSelectedCourses = this.subjectsForSelectedCourses.concat(list);
  }
  onCourseDeselect(course: Course) {
    let subjectsInSelectedCourse = this.subjectService.getList().filter(x => x.Course.Id == course.Id);
    this.selectedSubjects = this.selectedSubjects?.filter(function (x) {
      var shouldInclude = true;
      subjectsInSelectedCourse.forEach(element => {
        if (element.Id == x.Id) {
          shouldInclude = false;
        }
      });
      return shouldInclude;
    });

    this.subjectsForSelectedCourses = this.subjectsForSelectedCourses?.filter(function (x) {
      var shouldInclude = true;
      subjectsInSelectedCourse.forEach(element => {
        if (element.Id == x.Id) {
          shouldInclude = false;
        }
      });
      return shouldInclude;
    });
  }

  postTeacher() {
    return this.http.post(Constants.teachersBase, this.formData);
  }

  putTeacher() {
    return this.http.put(Constants.teachersBase + '/' + this.formData.Id, this.formData);
  }

  deleteTeacher(id: number) {
    return this.http.delete(Constants.teachersBase + '/' + id);
  }

  refreshList() {
    this.http.get(Constants.teachersBase)
      .toPromise()
      .then(res => this.teacherList = res as Teacher[]);
  }
}