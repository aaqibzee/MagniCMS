import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from "../../shared/student.service";
import { Course } from 'src/app/shared/course.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  styles: [],
})
export class StudentFormComponent implements OnInit {
  subjectsDropdownSettings: IDropdownSettings = {};
  selectedCourse: Course;
  isFormValid: boolean = true;
  subjectsSelectionClass: string = 'text-success';
  courseSelectionClass: string = 'text-success';

  constructor(
    public service: StudentService,
    private toaster: ToastrService) {
    this.subjectsDropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      noDataAvailablePlaceholderText: 'Select a course first',
      limitSelection: 6,
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
  }


  ngOnInit(): void {
    this.resetFormData();
  }

  onSubmit(form: NgForm) {
    if (this.isCourseSelectionValid()) {
      this.courseSelectionClass = 'text-danger'
      this.service.CourseSelcetValidationMesage = ' :Required';
    }

    else if (this.isFormValid) {
      if (this.isDuplicateRecord()) {
        this.toaster.error("Student already exists", "Error", { closeButton: true });
      }
      else {
        this.service.formData.Subjects = this.service.selectedSubjectsByStudent.map(a => a.Id);
        if (this.service.formData.Id == 0) {
          this.inserRecord(form);
        }
        else {
          this.updateRecord(form);
        }
      }
    }
  }

  isDuplicateRecord() {
    return this.service.getList().filter(
      x => x.Birthday == this.service.formData.Birthday
        && x.Name == this.service.formData.Name
        && this.service.formData.Id == 0).length > 0;
  }

  inserRecord(form: NgForm) {
    this.service.postStudent().subscribe(
      result => {
        this.toaster.success('Student added successfully', 'Success', { closeButton: true });
        this.resetForm(form);
      }, error => {
        this.toaster.error('An error occured while adding the new student', 'Error', { closeButton: true });
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putStudent().subscribe(
      result => {
        this.toaster.success('Student updated successfully', 'Success', { closeButton: true });
        this.resetForm(form);
      }, error => {
        this.toaster.error('An error occured while updating the new student', 'Error', { closeButton: true });
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

  onSubjectSelect(item: any) {
    this.validateSubjectSelection();
  }
  onSelectAllSubjects(items: any) {
    this.validateSubjectSelection();
  }
  onSubjectDeselect(item: any) {
    this.validateSubjectSelection();
  }

  validateSubjectSelection() {
    let allowed = this.service.formData.Course?.TotalCreditHours;
    let availed: number = 0;

    this.service.subjectsInselcetedCourse?.forEach(course => {
      if (this.service.selectedSubjectsByStudent?.find(x => x.Id == course.Id) != undefined) {
        availed += course.CreditHours;
      }
    });
    let difference = allowed - availed;

    if (availed < allowed) {
      this.subjectsSelectionClass = 'text-info'
      this.isFormValid = true;
      this.service.SubjectsSelcetValidationMesage = ': ' + difference + ' Credit hour(s) left';
    }
    else if (availed > allowed) {
      this.subjectsSelectionClass = 'text-danger'
      this.isFormValid = false;
      this.service.SubjectsSelcetValidationMesage = + (availed - allowed) + ' Extra credit hour(s), remove subject(s)';
    }
    else if (availed == allowed) {
      this.subjectsSelectionClass = 'text-info'
      this.service.SubjectsSelcetValidationMesage = ' : All credit hours availed'
      this.isFormValid = true;
    }
  }

  isCourseSelectionValid() {
    return this.service.selectedCourseByStudent == this.service.courseDropDownDefaultValue
  }
}
