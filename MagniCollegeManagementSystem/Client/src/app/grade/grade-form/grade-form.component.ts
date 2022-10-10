import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/shared/course.model';
import { CourseService } from 'src/app/shared/course.service';
import { Subject } from 'src/app/shared/subject.model';
import { GradeService } from "../../shared/grade.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css'],
  styles: [
  ]
})
export class GradeFormComponent implements OnInit {

  constructor(
    public service: GradeService,
    public courseService: CourseService,
    private toastr: ToastrService) { }

  subjectsInSelectedCourse: Subject[];

  ngOnInit(): void {
    this.resetFormData();
  }

  onSubmit(form: NgForm) {
    if (this.isFormInvalid()) {
      this.setValidationMessages();
      return;
    }

    if (this.service.formData.Id == 0) {
      this.inserRecord(form);
      return;
    }

    this.updateRecord(form);
  }
  isFormInvalid() {
    return this.service.formData.Course == null;
  }

  setValidationMessages() {
    this.service.CourseSelcetValidationMesage = ": Required"
  }


  onCourseSelect(course: Course) {
    this.service.formData.Course = course;
    this.service.CourseSelcetValidationMesage = "";
  }

  inserRecord(form: NgForm) {
    this.service.postGrade().subscribe(
      result => {
        this.toastr.success('Grade added successfully', 'Success');
        this.resetForm(form);
      }, error => {
        this.toastr.error('An error occured while adding the new grade', 'Error');
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putGrade().subscribe(
      result => {
        this.toastr.success('Grade updated successfully', 'Success');
        this.resetForm(form);
      }, error => {
        this.toastr.error('An error occured while updating the new grade', 'Error');
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
