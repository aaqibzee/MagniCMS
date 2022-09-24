import { Injectable } from '@angular/core';
import { Student } from "./student.model";
import { HttpClient } from '@angular/common/http';
import { CourseService } from "./course.service";
import { Course } from './course.model';
import { SubjectService } from './subject.service';
import { Subject } from './subject.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient,
    public courseService: CourseService,
    public subjectService: SubjectService)
  {
    courseService.refreshList();
    subjectService.refreshList();
    this.subjectsDropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      noDataAvailablePlaceholderText:'Select A Course First',
      limitSelection:6,
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
   }

  formData: Student = new Student();
  studentsList: Student[];
  selectedSubjectsByStudent: Subject[];
  subjectsOwnedBySelectedCourse: Subject[];
  MultiSelcetValidationMesage: string = '';
  
  readonly baseUrl = '/api/';
  readonly courseDropDownDefaultValue= 'Select Subjects';
  selectedCourseByStudent: string = this.courseDropDownDefaultValue;
  subjectsDropdownSettings: IDropdownSettings = {}; 

  resetFormData()
  {
    this.formData = new Student();
    this.selectedCourseByStudent = this.courseDropDownDefaultValue;
    this.selectedSubjectsByStudent = null;
    this.subjectsOwnedBySelectedCourse = null;
    this.MultiSelcetValidationMesage = ''; 
  }
 
  onSelectCourse(course: Course) {
    if (course?.Id != this.formData?.Course?.Id) {
      this.selectedCourseByStudent = course.Name;
      this.formData.Course = course;
      this.subjectsOwnedBySelectedCourse = this.subjectService.getList().filter(x => x.Course?.Id == course?.Id);
      this.selectedSubjectsByStudent = [];
      this.MultiSelcetValidationMesage = 'Select ' + course.NumberOfSubjectsAllowed + ' Course(s)';
      // this.subjectsDropdownSettings.limitSelection = course.NumberOfSubjectsAllowed;
      // this.subjectsDropdownSettings.itemsShowLimit = course.NumberOfSubjectsAllowed;
    }
  }
  
  populateForm(student: Student) {
    this.selectedCourseByStudent = student.Course.Name;
    this.formData = Object.assign({}, student);
    this.subjectsOwnedBySelectedCourse = this.subjectService.getList().filter(x=>x.Course?.Id==student.Course?.Id);
    this.selectedSubjectsByStudent = this.getSelestecSubjetcs();
  }

  getSelestecSubjetcs()
  {
    let list: Subject[]=[];
    let form = this.formData;
    this.subjectsOwnedBySelectedCourse.filter(function (x)
    {
      if (form?.Subjects?.includes(x.Id))
      {
        list.push(x);
      }
    });
    return list;
  }

  postStudent() {
    return this.http.post(this.baseUrl+'students', this.formData);
  }

  putStudent() {
    return this.http.put(this.baseUrl + 'students/' + this.formData.Id, this.formData);
  }

  deleteStudent(id:number) {
    return this.http.delete(this.baseUrl + 'students/' + id);
  }

  refreshList() {
    this.http.get(this.baseUrl + 'students')
      .toPromise()
      .then(res => this.studentsList = res as Student[]);
  }

  getMultiSelctSettings() {
    return this.subjectsDropdownSettings;
  }
}