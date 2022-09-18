import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/shared/course.model';
import { Student } from 'src/app/shared/student.model';
import { StudentService } from "../../shared/student.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styles: [
  ]
})
export class StudentFormComponent implements OnInit {
   courseDropDownCelectedValue: string = 'Select Course';
   course: Course;
  
  // On-Click Method on dropdown control
   selectValue(course: Course) {
     this.courseDropDownCelectedValue = course.Name;
     this.course = course;
   }

  constructor(public service:StudentService) { }

  ngOnInit(): void {
    this.resetFormData();
  }

  onSubmit(form: NgForm) {
    this.service.formData.Course = this.course;
    if (this.service.formData.Id == 0) {
      this.inserRecord(form);
    }
    else {
      this.updateRecord(form);
    }
     
  }

  inserRecord(form: NgForm)
  {
     this.service.postStudent().subscribe(
      result =>{
         this.resetForm(form);
         this.service.refreshList();
      }, error =>{
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm)
  {
     this.service.putStudent().subscribe(
      result =>{
         this.resetForm(form);
         this.service.refreshList();
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
    this.service.formData = new Student();
  }
}
