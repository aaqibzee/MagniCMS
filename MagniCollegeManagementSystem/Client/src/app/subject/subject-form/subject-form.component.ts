
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
    private toaster: ToastrService) { }

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
    return this.service.formData.Course == null
      || this.isDuplicateRecord();
  }

  isDuplicateRecord() {
    return this.service.getList().filter(
      x => x.Course?.Id == this.service.formData.Course?.Id
        && x.Code == this.service.formData.Code
        && x.CreditHours == this.service.formData.CreditHours
        && this.service.formData.Id == 0).length > 0;
  }

  setValidationMessages() {
    if (this.isDuplicateRecord()) {
      this.toaster.error("Subject already exists", "Error", { closeButton: true });
    }
    else {
      this.service.CourseSelcetValidationMesage = ": Required"
    }

  }

  inserRecord(form: NgForm) {
    this.service.postSubject().subscribe(
      result => {
        this.toaster.success('Subject added successfully', 'Success', { closeButton: true });
        this.resetForm(form);
        this.service.refreshList();
      }, error => {
        this.toaster.error('An error occured while adding the new subject', 'Error', { closeButton: true });
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putSubject().subscribe(
      result => {
        this.toaster.success('Subject updated successfully', 'Success', { closeButton: true });
        this.resetForm(form);
        this.service.refreshList();
      }, error => {
        this.toaster.error('An error occured while updating the new subject', 'Error', { closeButton: true });
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

