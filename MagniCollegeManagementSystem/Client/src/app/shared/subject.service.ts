import { Injectable } from '@angular/core';
import { Subject } from "./subject.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  formData: Subject = new Subject();
  subjectList: Subject[];
  readonly baseUrl = '/api/'
  readonly endpoint='subjects'

  postSubject() {
    return this.http.post(this.baseUrl+this.endpoint, this.formData);
  }

  putSubject() {
    return this.http.put(this.baseUrl + this.endpoint+'/' + this.formData.Id, this.formData);
  }

  deleteSubject(id:number) {
    return this.http.delete(this.baseUrl + this.endpoint+'/' + id);
  }

  refreshList() {
    this.http.get(this.baseUrl+ this.endpoint)
      .toPromise()
      .then(res => this.subjectList = res as Subject[]);
  }
}
