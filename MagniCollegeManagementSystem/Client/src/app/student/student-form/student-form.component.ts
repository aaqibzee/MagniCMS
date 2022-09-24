import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from "../../shared/student.service";
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styles: [
  ],
})
export class StudentFormComponent implements OnInit {
  
  constructor(public service: StudentService) { }
  selectedCourse: Course;
  isFormValid: boolean = true;
  subjectsSelectionClass: string = 'text-success';
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

  inserRecord(form: NgForm)
  {
     this.service.postStudent().subscribe(
      result =>{
         this.resetForm(form);
         this.service.refreshList();
      }, error =>{
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm)
  {
     this.service.putStudent().subscribe(
      result =>{
         this.resetForm(form);
         this.service.refreshList();
      }, error =>{
        console.log(error);
      }
    );
  }

   resetForm(form: NgForm) {
     form.form.reset();
     this.resetFormData();
   }
  
  resetFormData()
  {
    this.service.resetFormData();
  }
//TODO: Remote these below functions
  //Start
  onItemSelect(item: any) {
    this.validateSubjectSelection();
  }
  onSelectAll(items: any) {
    this.validateSubjectSelection();
  }
  onItemDeselect(item: any)
  {
    this.validateSubjectSelection();
  }
  
  validateSubjectSelection()
  {
    let required = this.service.formData.Course?.NumberOfSubjectsAllowed;
    let availed = this.service.selectedSubjectsByStudent.length;
    let difference = required-availed;
   
   
    if (availed < required)
    {
      this.subjectsSelectionClass='text-info'
       this.isFormValid = false;
       this.service.MultiSelcetValidationMesage = 'Select ' +difference + ' more subject(s)';
    }
    else if (availed > required)
    {
      this.subjectsSelectionClass='text-danger'
       this.isFormValid = false;
      this.service.MultiSelcetValidationMesage = 
        (availed - required) + ' extra subject(s) selected';  
    }
    else if (availed == required)
    {
      this.subjectsSelectionClass='text-info'
      this.service.MultiSelcetValidationMesage ='Max limit reached' 
      this.isFormValid = true;
    }
  }

  isFormInvalid(form: NgForm)
  {
    return (form.invalid
      || this.service.selectedCourseByStudent == this.service.courseDropDownDefaultValue
      || this.service.selectedSubjectsByStudent?.length == 0
      || this.service.selectedSubjectsByStudent == null
      || (!this.isFormValid));
  }
}
