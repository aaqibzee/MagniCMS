import { Injectable } from '@angular/core';
import { Student } from "./student.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  formData: Student = new Student();
  readonly baseUrl='/api/'

  postStudentDetails() {
    return this.http.post(this.baseUrl+'students', this.formData);
  }
}
