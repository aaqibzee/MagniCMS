import { Component, OnInit } from '@angular/core';
import { NgForm ,FormsModule} from '@angular/forms';
import { StudentService } from "../../shared/student.service";
import { NgSelectModule } from "@ng-select/ng-select";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Course } from 'src/app/shared/course.model';
import { Subject } from 'src/app/shared/subject.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styles: [
  ],
})
export class StudentFormComponent implements OnInit {
  
  constructor(public service: StudentService) { }
  selectedCourse: Course;

  // Multiselect Start
  subjectsDropdownSettings:IDropdownSettings=  {};
  // Multiselect End
  ngOnInit(): void {
    this.resetFormData();
    
  
    this.subjectsDropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      limitSelection:3,
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onSubmit(form: NgForm) {
    this.service.formData.Subjects = this.service.selectedSubjects;
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

  onItemSelect(item: any) {
    console.log(this.selectedCourse)
    console.log(this.service.selectedSubjects)
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  isFormInvalid(form: NgForm)
  {
    return (form.invalid
      ||this.service.courseDropDownCelectedValue == this.service.courseDropDownDefaultValue
      || this.service.selectedSubjects.length == 0);
  }
}
