import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Course } from 'src/app/shared/course.model';
import { CourseService } from 'src/app/shared/course.service';
import { TeacherService } from "../../shared/teacher.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css'],
})
export class TeacherFormComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    public service: TeacherService,
    public courseService: CourseService,
    private toastr: ToastrService) {
    this.subjectsDropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      noDataAvailablePlaceholderText: 'Select Course First',
      limitSelection: 6,
      itemsShowLimit: 6,
      allowSearchFilter: true
    };

    this.coursesDropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      limitSelection: 6,
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
    courseService.refreshList();
    this.courses = courseService.courseList;
  }
  subjectsDropdownSettings: IDropdownSettings = {};
  coursesDropdownSettings: IDropdownSettings = {};
  ngOnInit(): void {
    this.resetFormData();
  }

  onSubmit(form: NgForm) {
    this.service.formData.Subjects = this.service.selectedSubjects.map(x => x.Id);
    this.service.formData.Courses = this.service.selectedCourses.map(x => x.Id);
    if (this.service.formData.Id == 0) {
      this.inserRecord(form);
    }
    else {
      this.updateRecord(form);
    }

  }

  inserRecord(form: NgForm) {
    this.service.postTeacher().subscribe(
      result => {
        this.toastr.success('Teacher added successfully', 'Success');
        this.resetForm(form);
      }, error => {
        this.toastr.error('An error occured while adding the new teacher', 'Error');
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putTeacher().subscribe(
      result => {
        this.toastr.success('Teacher updated successfully', 'Success');
        this.resetForm(form);
      }, error => {
        this.toastr.error('An error occured while updating the new teacher', 'Error');
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
