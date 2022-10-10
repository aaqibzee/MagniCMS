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
    if (this.service.formData.Id == 0) {
      this.insertCourse(form);
    }
    else {
      this.updateCourse(form);
    }

  }

  insertCourse(form: NgForm) {
    this.service.postCourse().subscribe(
      result => {
        this.toastr.success('Course added successfully', 'Success');
        this.resetForm(form);
      }, error => {
        this.toastr.error('An error occured while adding the new course', 'Error');
        console.log(error);
      }
    );
  }

  updateCourse(form: NgForm) {
    this.service.putCourse().subscribe(
      result => {
        this.toastr.success('Course updated successfully', 'Success');
        this.resetForm(form);
      }, error => {
        this.toastr.error('An error occured while updating the new course', 'Error');
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