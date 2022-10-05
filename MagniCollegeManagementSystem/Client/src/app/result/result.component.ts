import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { Result } from '../shared/result.model';
import { ResultService } from '../shared/result.service';
import { SubjectService } from '../shared/subject.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  constructor(public service: ResultService, public subjectService: SubjectService, private ngZone: NgZone)
  {}
  
  ngOnInit(): void {
    this.service.refreshList();
    window[Constants.resultComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
  }
  
  UpdateResult(record: Result) {
    this.service.populateForm(record);
  }

  DeleteResult(record: Result) {
    this.service.deleteResult(record.Id).subscribe(
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
    let subject = this.subjectService?.subjectList?.find(x => x.Id == subjectId);
    return subject?.Name;
  }
}

