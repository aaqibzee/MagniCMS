import { Component, OnInit } from '@angular/core';
import { Grade } from '../shared/grade.model';
import { GradeService } from '../shared/grade.service'

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styles: [
  ]
})
export class GradeComponent implements OnInit {

  constructor(public service: GradeService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

   PopulateForm(record: Grade) {
    //assign the object copy and not the original object
    this.service.formData =  Object.assign({}, record);
  }

   DeleteGrade(record: Grade) {
     this.service.deleteGrade(record.Id).subscribe(
       result => {
        this.service.refreshList();
       }, error => {
         console.log(error);
       });
  }
}
