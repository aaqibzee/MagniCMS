
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from 'src/app/shared/course.service';
import { SubjectService } from "../../shared/subject.service";

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css'],
  styles: [
  ]
})
export class SubjectFormComponent implements OnInit {

  constructor(public service: SubjectService, public courseService: CourseService) { }

  ngOnInit(): void {
    this.resetFormData();
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0) {
      this.inserRecord(form);
    }
    else {
      this.updateRecord(form);
    }

  }

  inserRecord(form: NgForm) {
    this.service.postSubject().subscribe(
      result => {
        this.resetForm(form);
        this.service.refreshList();
      }, error => {
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putSubject().subscribe(
      result => {
        this.resetForm(form);
        this.service.refreshList();
      }, error => {
        console.log(error);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.resetFormData();
  }

  resetFormData() {
    this.service.resetFormData();
  }
}

