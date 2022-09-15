import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/shared/student.model';
import { StudentService } from "../../shared/student.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styles: [
  ]
})
export class StudentFormComponent implements OnInit {

  constructor(public service:StudentService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.postStudentDetails().subscribe(
      result =>{
        this.resetForm(form);
      }, error =>{
        console.log(error);
      }
    );
  }
   resetForm(form: NgForm) {
     form.form.reset();
     this.service.formData = new Student();
  }

}
