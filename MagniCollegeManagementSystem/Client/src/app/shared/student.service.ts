import { Injectable } from '@angular/core';
import { Student } from "./student.model";
import { HttpClient } from '@angular/common/http';
import { CourseService } from "./course.service";
import { Course } from './course.model';
import { SubjectService } from './subject.service';
import { Subject } from './subject.model';
import { Constants } from './Constants';
import { SplashScreenStateService } from './splash-screen-state.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly courseDropDownDefaultValue = 'Select Course';
  readonly genderDropDownDefaultValue = 'Select Gender';
  readonly genderOptions: string[] = ['Male', 'Female', 'Other'];
  subjectsInselcetedCourse: Subject[];
  SubjectsSelcetValidationMesage: string = '';
  CourseSelcetValidationMesage: string = '';
  selectedSubjectsByStudent: Subject[];
  selectedCourseByStudent: string = this.courseDropDownDefaultValue;
  studentsList: Student[];
  formData: Student = new Student();

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

  resetFormData() {
    this.formData = new Student();
    this.selectedCourseByStudent = this.courseDropDownDefaultValue;
    this.selectedSubjectsByStudent = null;
    this.subjectsInselcetedCourse = null;
    this.SubjectsSelcetValidationMesage = '';
  }

  onSelectCourse(course: Course) {
    if (course?.Id != this.formData?.Course?.Id) {
      this.selectedCourseByStudent = course.Name;
      this.formData.Course = course;
      this.subjectsInselcetedCourse = this.subjectService.getList().filter(x => x.Course?.Id == course?.Id);
      this.selectedSubjectsByStudent = [];
      this.SubjectsSelcetValidationMesage = course.TotalCreditHours + ' Credit Hours Left';
      this.CourseSelcetValidationMesage = '';
    }
  }

  populateForm(student: Student) {
    this.selectedCourseByStudent = student.Course.Name;
    this.formData = Object.assign({}, student);
    this.subjectsInselcetedCourse = this.subjectService.getList().filter(x => x.Course?.Id == student.Course?.Id);
    this.selectedSubjectsByStudent = this.getSelctedSubjectListWithAllDetails();
  }

  getSelctedSubjectListWithAllDetails() {
    let list: Subject[] = [];
    let form = this.formData;
    this.subjectsInselcetedCourse.filter(function (x) {
      if (form?.Subjects?.includes(x.Id)) {
        list.push(x);
      }
    });
    return list;
  }

  postStudent() {
    return this.http.post(Constants.studentsBase, this.formData);
  }

  putStudent() {
    return this.http.put(Constants.studentsBase + '/' + this.formData.Id, this.formData);
  }

  deleteStudent(id: number) {
    return this.http.delete(Constants.studentsBase + '/' + id);
  }

  refreshList() {
    this.http.get(Constants.studentsBase)
      .toPromise()
      .then(res => this.studentsList = res as Student[]);
  }

  getList() {
    return this.studentsList;
  }
}
