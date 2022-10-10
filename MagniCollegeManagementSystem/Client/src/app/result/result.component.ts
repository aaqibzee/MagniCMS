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

  constructor(
    public service: ResultService,
    public subjectService: SubjectService,
    private ngZone: NgZone,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    window[Constants.resultComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
  }

  updateResult(record: Result) {
    this.toastr.info('Data populated to form', 'Info');
    this.service.populateForm(record);
  }

  deleteResult(record: Result) {
    this.service.deleteResult(record.Id).subscribe(
      result => {
        this.toastr.success('Result deleted successfully', 'Success');
      }, error => {
        this.toastr.error('An error occured, while deleting result', 'Error');
        console.log(error);
      });
    if (record.Id == this.service.formData.Id) {
      this.service.resetFormData();
    }
  }
}

