import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Grade } from 'src/app/shared/grade.model';
import { GradeService } from "../../shared/grade.service";

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styles: [
  ]
})
export class GradeFormComponent implements OnInit {

  constructor(public service:GradeService) { }

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
     this.service.postGrade().subscribe(
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
     this.service.putGrade().subscribe(
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
     this.service.formData = new Grade();
   }
}
