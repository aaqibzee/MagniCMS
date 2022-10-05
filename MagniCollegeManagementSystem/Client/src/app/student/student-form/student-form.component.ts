import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from "../../shared/student.service";
import { Course } from 'src/app/shared/course.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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

  constructor(public service: StudentService) {
    this.subjectsDropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      noDataAvailablePlaceholderText: 'Select A Course First',
      limitSelection: 6,
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
  }


  ngOnInit(): void {
    this.resetFormData();
  }

  onSubmit(form: NgForm) {
    this.service.formData.Subjects = this.service.selectedSubjectsByStudent.map(a => a.Id);
    if (this.service.formData.Id == 0) {
      this.inserRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  inserRecord(form: NgForm) {
    this.service.postStudent().subscribe(
      result => {
        this.resetForm(form);
      }, error => {
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putStudent().subscribe(
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
      this.service.MultiSelcetValidationMesage = difference + ' Credit Hourse Remained';
    }
    else if (availed > allowed) {
      this.subjectsSelectionClass = 'text-danger'
      this.isFormValid = false;
      this.service.MultiSelcetValidationMesage = (availed - allowed) + ' Extra Credit Hour(s) Availed, Remove Extra Subject(s)';
    }
    else if (availed == allowed) {
      this.subjectsSelectionClass = 'text-info'
      this.service.MultiSelcetValidationMesage = 'All Credit Hours Availed'
      this.isFormValid = true;
    }
  }

  isFormInvalid(form: NgForm) {
    return (form.invalid
      || this.service.selectedCourseByStudent == this.service.courseDropDownDefaultValue
      || this.service.selectedSubjectsByStudent?.length == 0
      || this.service.selectedSubjectsByStudent == null
      || (!this.isFormValid));
  }
}
