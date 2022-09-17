import { Injectable } from '@angular/core';
import { Grade } from "./grade.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http:HttpClient) { }

  formData: Grade = new Grade();
  gradesList: Grade[];
  readonly baseUrl='/api/'

  postGrade() {
    return this.http.post(this.baseUrl+'Grades', this.formData);
  }

  putGrade() {
    return this.http.put(this.baseUrl + 'Grades/' + this.formData.Id, this.formData);
  }

  deleteGrade(id:number) {
    return this.http.delete(this.baseUrl + 'Grades/' + id);
  }

  refreshList() {
    this.http.get(this.baseUrl + 'Grades')
      .toPromise()
      .then(res => this.gradesList = res as Grade[]);
  }
}
