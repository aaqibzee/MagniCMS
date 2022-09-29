import { Component, OnInit,Input,NgZone  } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';
import { Constants } from '../shared/Constants';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {

  constructor(public service: StudentService,private ngZone: NgZone) {
     
   }
  @Input() selectedItem: string = '';
  
  ngOnInit(): void {
    this.service.refreshList();
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
  GetSubjectName(subjectId:number)
  {
    let subject = this.service?.subjectService?.subjectList?.find(x => x.Id == subjectId);
    return subject?.Name;
  }
}
