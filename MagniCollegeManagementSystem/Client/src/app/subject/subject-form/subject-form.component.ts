
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'src/app/shared/subject.model';
import { SubjectService } from "../../shared/subject.service";

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styles: [
  ]
})
export class SubjectFormComponent implements OnInit {

  constructor(public service:SubjectService) { }

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
     this.service.postSubject().subscribe(
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
     this.service.putSubject().subscribe(
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
     this.service.formData = new Subject();
   }
}

