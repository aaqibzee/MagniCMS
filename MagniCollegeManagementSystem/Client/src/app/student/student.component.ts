import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.service.refreshList();
  }
  UpdateStudent(record: Student) {
    //assign the object copy and not the original object
    this.service.formData =  Object.assign({}, record);
  }

   DeleteStudent(record: Student) {
     this.service.deleteStudent(record.Id).subscribe(
       result => {
        this.service.refreshList();
       }, error => {
         console.log(error);
       });
  }
}
