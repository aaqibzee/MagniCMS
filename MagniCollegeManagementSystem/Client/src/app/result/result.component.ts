import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { Result } from '../shared/result.model';
import { ResultService } from '../shared/result.service';
import { SubjectService } from '../shared/subject.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  resultsList: Result[];
  constructor(
    public service: ResultService,
    public subjectService: SubjectService,
    private ngZone: NgZone,
    private toaster: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    window[Constants.resultComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
    this.service.sourceList$.subscribe(
      list => { this.resultsList = list; }
    );
  }

  updateResult(record: Result) {
    this.toaster.info('Data populated to form', 'Info', { closeButton: true });
    this.service.populateForm(Object.assign({}, record));
  }

  deleteResult(record: Result) {
    this.service.deleteResult(record.Id).subscribe(
      result => {
        this.toaster.success('Result deleted successfully', 'Success', { closeButton: true });
      }, error => {
        this.toaster.error('An error occured, while deleting result', 'Error', { closeButton: true });
        console.log(error);
      });
    this.service.resetFormData(record.Id);
  }
}

