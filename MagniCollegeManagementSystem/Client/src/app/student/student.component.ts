import { Component, OnInit,Input,NgZone  } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';
import { Constants } from '../shared/Constants';
import { ResultService } from '../shared/result.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {

  subjectsDropdownSettings: IDropdownSettings = {};

  constructor(public service: StudentService,private ngZone: NgZone, public resultService: ResultService) {
     this.subjectsDropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      noDataAvailablePlaceholderText:'Select A Course First',
      limitSelection:6,
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
    this.service.refreshList();
    this.resultService.refreshList();
  }
  @Input() selectedItem: string = '';
  
  ngOnInit(): void {
    
    window[Constants.studentComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
  }
  UpdateStudent(record: Student) {
    this.service.populateForm(record);
  }

  DeleteStudent(record: Student) {
    this.service.deleteStudent(record.Id).subscribe(
      result => {
      }, error => {
        console.log(error);
    });
    if (record.Id == this.service.formData.Id){
        this.service.resetFormData();
    }
    
  }
  GetSubjectName(subjectId:number, stdId:number)
  {
    let subject = this.service?.subjectService?.subjectList?.find(x => x.Id == subjectId);
    return subject?.Name;
  }

  GetAvailedCreditHours(student:Student)
  {
    let availedCreditHourse = 0;
    let subjects = this.service?.subjectService?.subjectList?.
      filter(x => student.Subjects?.includes(x.Id));
    
    subjects?.forEach(x => {
      availedCreditHourse += x.CreditHours;
    });
    return availedCreditHourse
  }
  GetGrade(subjectId:number, stdId:number)
  {
    let subject = this.service?.subjectService?.subjectList?.find(x => x.Id == subjectId);
    let result = this.resultService.resultsList?.find(x => x.Student?.Id == stdId && x.Subject?.Id == subject.Id);
    return result?.Grade?.Title?result?.Grade?.Title:"Not Decided Yet";
  }
}
