
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from 'src/app/shared/course.service';
import { SubjectService } from "../../shared/subject.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css'],
  styles: [
  ]
})
export class SubjectFormComponent implements OnInit {

  constructor(
    public service: SubjectService,
    public courseService: CourseService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetFormData();
  }

  onSubmit(form: NgForm) {
    if (this.isFormInvalid()) {
      this.setValidationMessages();
    }
    else {
      if (this.service.formData.Id == 0) {
        this.inserRecord(form);
      }
      else {
        this.updateRecord(form);
      }
    }
  }

  isFormInvalid() {
    return this.service.formData.Course == null;
  }

  setValidationMessages() {
    this.service.CourseSelcetValidationMesage = ": Required"
  }

  inserRecord(form: NgForm) {
    this.service.postSubject().subscribe(
      result => {
        this.toastr.success('Subject added successfully', 'Success');
        this.resetForm(form);
        this.service.refreshList();
      }, error => {
        this.toastr.error('An error occured while adding the new subject', 'Error');
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putSubject().subscribe(
      result => {
        this.toastr.success('Subject updated successfully', 'Success');
        this.resetForm(form);
        this.service.refreshList();
      }, error => {
        this.toastr.error('An error occured while updating the new subject', 'Error');
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

