import { Injectable } from '@angular/core';
import { Student } from "./student.model";
import { HttpClient } from '@angular/common/http';
import { CourseService } from "./course.service";
import { Course } from './course.model';
import { SubjectService } from './subject.service';
import { Subject } from './subject.model';

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
   }

  formData: Student = new Student();
  studentsList: Student[];
  selectedSubjects: Subject[];
  subjectsList = [];
  
  readonly baseUrl = '/api/';
  readonly courseDropDownDefaultValue= 'Select Course';
  courseDropDownCelectedValue: string = this.courseDropDownDefaultValue;
   

  resetFormData()
  {
    this.formData = new Student();
    this.courseDropDownCelectedValue = this.courseDropDownDefaultValue;
    this.selectedSubjects = null;
    this.subjectsList =  null;
  }
 
  onSelectCourse(course: Course) {
     this.courseDropDownCelectedValue = course.Name;
    this.formData.Course = course;
    //Add elements to this list, once the course is selcted. To avoid user, selcting wrong subjects for a course
    this.subjectsList = this.subjectService.getList().filter(x=>x.Course?.Id==course?.Id);
  }
  
  populateForm(student: Student) {
    this.courseDropDownCelectedValue = student.Course.Name;
    this.formData = Object.assign({}, student);
    this.subjectsList = this.subjectService.getList().filter(x=>x.Course?.Id==student.Course?.Id);
    this.selectedSubjects = this.getSelestecSubjetcs();
  }

  getSelestecSubjetcs()
  {
    let list: Subject[];
    this.subjectsList.filter(function (x)
    {
      if (this.formData.Subjects.includes(x))
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
}