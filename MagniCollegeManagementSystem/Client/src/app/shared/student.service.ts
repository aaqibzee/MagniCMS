import { Injectable } from '@angular/core';
import { Student } from "./student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  formData:Student= new Student();
}
