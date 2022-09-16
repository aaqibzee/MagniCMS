import { Injectable } from '@angular/core';
import { Student } from "./student.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  formData: Student = new Student();
  studentsList: Student[];
  readonly baseUrl='/api/'

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
