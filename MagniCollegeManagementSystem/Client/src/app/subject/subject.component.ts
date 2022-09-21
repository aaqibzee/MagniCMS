import { Component, OnInit } from '@angular/core';
import { Subject } from '../shared/subject.model';
import { SubjectService } from '../shared/subject.service'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: [
  ]
})
export class SubjectComponent implements OnInit {

  constructor(public service: SubjectService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  UpdateSubject(record: Subject) {
    this.service.populateForm(record);
  }

   DeleteSubject(record: Subject) {
     this.service.deleteSubject(record.Id).subscribe(
       result => {
        this.service.refreshList();
       }, error => {
         console.log(error);
       });
  }
}
