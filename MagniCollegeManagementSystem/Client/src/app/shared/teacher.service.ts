import { Injectable } from '@angular/core';
import { Teacher } from "./teacher.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }

  formData: Teacher = new Teacher();
  teacherList: Teacher[];
  readonly baseUrl = '/api/'
  readonly endpoint='teachers'

  postTeacher() {
    return this.http.post(this.baseUrl+this.endpoint, this.formData);
  }

  putTeacher() {
    return this.http.put(this.baseUrl + this.endpoint+'/' + this.formData.Id, this.formData);
  }

  deleteTeacher(id:number) {
    return this.http.delete(this.baseUrl + this.endpoint+'/' + id);
  }

  refreshList() {
    this.http.get(this.baseUrl+ this.endpoint)
      .toPromise()
      .then(res => this.teacherList = res as Teacher[]);
  }
}
