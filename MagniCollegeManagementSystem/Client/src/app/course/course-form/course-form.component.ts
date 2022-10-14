import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from "../../shared/course.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {

  constructor(
    public service: CourseService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetFormData();
  }

  onSubmit(form: NgForm) {
    if (this.isDuplicateRecord()) {
      this.toastr.error("Course already exists", "Error", { closeButton: true });
    }
    else if (this.service.formData.Id == 0) {
      this.insertCourse(form);
    }
    else {
      this.updateCourse(form);
    }

  }

  isDuplicateRecord() {
    return this.service.getList()?.filter(
      x => x.Code == this.service.formData.Code
        && x.Name == this.service.formData.Name
        && x.TotalCreditHours == this.service.formData.TotalCreditHours
        && this.service.formData.Id == 0).length > 0;
  }

  insertCourse(form: NgForm) {
    this.service.postCourse().subscribe(
      result => {
        this.toastr.success('Course added successfully', 'Success', { closeButton: true });
        this.resetForm(form);
      }, error => {
        this.toastr.error('An error occured while adding the new course', 'Error', { closeButton: true });
        console.log(error);
      }
    );
  }

  updateCourse(form: NgForm) {
    this.service.putCourse().subscribe(
      result => {
        this.toastr.success('Course updated successfully', 'Success', { closeButton: true });
        this.resetForm(form);
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
    this.service.resetFormData();
  }
}