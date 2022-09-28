import { Injectable } from '@angular/core';
import { Teacher } from "./teacher.model";
import { HttpClient } from '@angular/common/http';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subject } from './subject.model';
import { SubjectService } from './subject.service';
import { Constants } from './Constants';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient, public subjectService:SubjectService) {
    this.subjectsDropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      limitSelection:6,
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
    this.subjects = subjectService.getList();
   }

  formData: Teacher = new Teacher();
  teacherList: Teacher[];
  readonly genderDropDownDefaultValue = 'Select Gender';
  readonly genderOptions: string[] = ['Male', 'Female', 'Other'];
  selectedGender: string = this.genderDropDownDefaultValue;
  subjectsDropdownSettings: IDropdownSettings = {};
  subjects: Subject[]; 
  selectedSubjects: Subject[]; 

  resetFormData()
  {
    this.formData = new Teacher();
    this.selectedGender = this.genderDropDownDefaultValue;
    this.selectedSubjects= Subject[0];
  }

   onSelectGender(gender: string) {
     this.selectedGender = gender;
     this.formData.Gender = gender;
  }

  postTeacher() {
    return this.http.post(Constants.teachersBase, this.formData);
  }

  putTeacher() {
    return this.http.put(Constants.teachersBase+'/' + this.formData.Id, this.formData);
  }

  deleteTeacher(id:number) {
    return this.http.delete(Constants.teachersBase+'/' + id);
  }

  refreshList() {
    this.http.get(Constants.teachersBase)
      .toPromise()
      .then(res => this.teacherList = res as Teacher[]);
  }
}
