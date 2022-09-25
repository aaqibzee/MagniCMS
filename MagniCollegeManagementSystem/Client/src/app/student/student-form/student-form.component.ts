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
    let allowed = this.service.formData.Course?.TotalCreditHours;
    let availed: number = 0;
    
    this.service.subjectsInselcetedCourse?.forEach(element => {
      if (this.service.selectedSubjectsByStudent?.find(x => x.Id == element.Id) != undefined)
      {
        availed += element.CreditHours;
      }
    });
    let difference = allowed - availed;
    this.service.formData.RemainingCreditHours = difference;

    if (availed < allowed)
    {
      
      this.subjectsSelectionClass='text-info'
       this.isFormValid = true;
       this.service.MultiSelcetValidationMesage = difference + ' Credit Hourse Remained';
    }
    else if (availed > allowed)
    {
      
      this.subjectsSelectionClass='text-danger'
       this.isFormValid = false;
      this.service.MultiSelcetValidationMesage = 
        (availed - allowed) + ' Extra Credit Hour(s) Availed, Remove Extra Subject(s)';  
    }
    else if (availed == allowed)
    {
      this.subjectsSelectionClass='text-info'
      this.service.MultiSelcetValidationMesage ='All Credit Hours Availed' 
      this.isFormValid = true;
    }
  }

  isFormInvalid(form: NgForm)
  {
    return (form.invalid
      || this.service.selectedCourseByStudent == this.service.courseDropDownDefaultValue
      || this.service.selectedGender == this.service.genderDropDownDefaultValue
      || this.service.selectedSubjectsByStudent?.length == 0
      || this.service.selectedSubjectsByStudent == null
      || (!this.isFormValid));
  }
}
