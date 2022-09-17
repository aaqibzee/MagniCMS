import { Component, OnInit } from '@angular/core';
import { Teacher } from '../shared/teacher.model';
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

   PopulateForm(record: Teacher) {
    //assign the object copy and not the original object
    this.service.formData =  Object.assign({}, record);
  }

   DeleteTeacher(record: Teacher) {
     this.service.deleteTeacher(record.Id).subscribe(
       result => {
        this.service.refreshList();
       }, error => {
         console.log(error);
       });
  }
}
