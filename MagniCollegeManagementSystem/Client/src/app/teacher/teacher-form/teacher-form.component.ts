import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Teacher } from 'src/app/shared/teacher.model';
import { TeacherService } from "../../shared/teacher.service";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styles: [
  ]
})
export class TeacherFormComponent implements OnInit {

  constructor(public service:TeacherService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
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
         this.service.refreshList();
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
         this.service.refreshList();
      }, error =>{
        console.log(error);
      }
    );
  }

   resetForm(form: NgForm) {
     form.form.reset();
     this.service.formData = new Teacher();
   }
}
