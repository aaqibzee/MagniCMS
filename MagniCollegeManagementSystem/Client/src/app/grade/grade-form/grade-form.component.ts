import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/shared/course.model';
import { CourseService } from 'src/app/shared/course.service';
import { Grade } from 'src/app/shared/grade.model';
import { Subject } from 'src/app/shared/subject.model';
import { GradeService } from "../../shared/grade.service";

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css'],
  styles: [
  ]
})
export class GradeFormComponent implements OnInit {

  constructor(public service: GradeService, public courseService: CourseService) { }

  subjectsInSelectedCourse: Subject[];

  ngOnInit(): void {
    this.resetFormData();
  }

  onSubmit(form: NgForm) {
    if (this.IsFormInvalid()) {
      this.SetValidationMessages();
      return;
    }

    if (this.service.formData.Id == 0) {
      this.inserRecord(form);
      return;
    }

    this.updateRecord(form);
  }
  IsFormInvalid() {
    return this.service.formData.Course == null;
  }

  SetValidationMessages() {
    this.service.CourseSelcetValidationMesage = ": Required"
  }


  onCourseSelect(course: Course) {
    this.service.formData.Course = course;
    this.service.CourseSelcetValidationMesage = "";
  }

  inserRecord(form: NgForm) {
    this.service.postGrade().subscribe(
      result => {
        this.resetForm(form);
      }, error => {
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putGrade().subscribe(
      result => {
        this.resetForm(form);
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
