import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { Subject } from '../shared/subject.model';
import { SubjectService } from '../shared/subject.service'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: [
  ]
})
export class SubjectComponent implements OnInit {

  constructor(public service: SubjectService ,private ngZone: NgZone) { }

  ngOnInit(): void {
    this.service.refreshList();
     window[Constants.subjectComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
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
