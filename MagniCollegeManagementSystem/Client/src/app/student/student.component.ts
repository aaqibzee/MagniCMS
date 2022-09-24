import { Component, OnInit,Input } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {

  constructor(public service: StudentService) { }
  @Input() selectedItem: string = '';
  
  ngOnInit(): void {
    this.service.refreshList();
  }
  UpdateStudent(record: Student) {
    this.service.populateForm(record);
  }

  DeleteStudent(record: Student) {
    this.service.deleteStudent(record.Id).subscribe(
      result => {
      this.service.refreshList();
      }, error => {
        console.log(error);
    });
    if (record.Id == this.service.formData.Id){
        this.service.resetFormData();
    }
    
  }
  GetSubjectName(subjectId:Number)
  {
    let subject = this.service?.subjectService?.subjectList?.filter(x => x.Id == subjectId);
    return subject[0]?.Name;
  }
}
