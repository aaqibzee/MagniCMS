import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student.model';
import { TeacherService } from '../shared/teacher.service'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(public service: TeacherService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

   PopulateForm(record: Student) {
    //assign the object copy and not the original object
    this.service.formData =  Object.assign({}, record);
  }

   DeleteStudent(record: Student) {
     this.service.deleteTeacher(record.Id).subscribe(
       result => {
        this.service.refreshList();
       }, error => {
         console.log(error);
       });
  }
}
