import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from "../../shared/course.service";
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {

  constructor
    (
      public service: CourseService,
      private toastr: ToastrService
    ) { }

  public formData: Course = new Course();

  ngOnInit(): void {
    this.resetFormData();
    this.service.formData$.subscribe(
      data => {
        this.formData = data;
      }
    );

    this.service.resetFormData$.subscribe(
      id => {
        this.resetFormDataOnDelete(id)
      }
    );
  }

  onSubmit(form: NgForm) {
    if (this.isDuplicateRecord()) {
      this.toastr
        .error("Course already exists. Use update option", "Error", { closeButton: true });
    }
    else if (this.formData.Id == 0) {
      this.insertCourse(form);
    }
    else {
      this.updateCourse(form);
    }
  }

  isDuplicateRecord() {
    return this.service.getList()?.filter(
      x => x.Code == this.formData.Code
        && x.Name == this.formData.Name
        && x.TotalCreditHours == this.formData.TotalCreditHours
        && this.formData.Id == 0).length > 0;
  }

  insertCourse(form: NgForm) {
    this.service.postCourse(this.formData).subscribe(
      result => {
        this.toastr.success('Course added successfully', 'Success', { closeButton: true });
        this.resetForm(form);
        this.service.closeModal();
      }, error => {
        this.toastr.error('An error occured while adding the new course', 'Error', { closeButton: true });
        console.log(error);
      }
    );
  }

  updateCourse(form: NgForm) {
    this.service.putCourse(this.formData).subscribe(
      result => {
        this.toastr.success('Course updated successfully', 'Success', { closeButton: true });
        this.resetForm(form);
        this.service.closeModal();
      }, error => {
        this.toastr.error('An error occured while updating the new course', 'Error', { closeButton: true });
        console.log(error);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.resetFormData();
  }

  resetFormData() {
    this.formData = new Course();
  }

  resetFormDataOnDelete(id: number) {
    if (id == this.formData.Id || id == -1) {
      this.resetFormData();
    }
  }
}