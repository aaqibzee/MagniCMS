import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { TeacherService } from "../../shared/teacher.service";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styles: [
  ]
})
export class TeacherFormComponent implements OnInit {

  constructor(public service: TeacherService) {
    this.subjectsDropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      noDataAvailablePlaceholderText:'Select Course First',
      limitSelection:6,
      itemsShowLimit: 6,
      allowSearchFilter: true
    };

    this.coursesDropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      limitSelection:6,
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
    
  }
  subjectsDropdownSettings: IDropdownSettings = {};
  coursesDropdownSettings: IDropdownSettings = {};

  ngOnInit(): void {
    this.resetFormData();
  }

  onSubmit(form: NgForm) {
    this.service.formData.Subjects = this.service.selectedSubjects.map(x => x.Id);
    this.service.formData.Courses = this.service.selectedCourses.map(x => x.Id);
    if (this.service.formData.Id == 0) {
      this.inserRecord(form);
    }
    else {
      this.updateRecord(form);
    }
     
  }

 inserRecord(form: NgForm)
  {
     this.service.postTeacher().subscribe(
      result =>{
         this.resetForm(form);
      }, error =>{
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm)
  {
     this.service.putTeacher().subscribe(
      result =>{
         this.resetForm(form);
      }, error =>{
        console.log(error);
      }
    );
  }

  resetForm(form: NgForm) {
     form.form.reset();
     this.resetFormData();
   }
  
  resetFormData()
  {
    this.service.resetFormData();
  }
}
