import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { GradeService } from '../shared/grade.service';
import { ResultService } from '../shared/result.service';
import { Subject } from '../shared/subject.model';
import { SubjectService } from '../shared/subject.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: [
  ]
})
export class SubjectComponent implements OnInit {

  constructor(
    public service: SubjectService,
    public resultService: ResultService,
    public gradeService: GradeService,
    private ngZone: NgZone,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    window[Constants.subjectComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
  }

  updateSubject(record: Subject) {
    this.toastr.info('Data populated to form', 'Info');
    this.service.populateForm(record);
  }

  deleteSubject(record: Subject) {
    this.service.deleteSubject(record.Id).subscribe(
      result => {
        this.toastr.success('Subject deleted successfully', 'Success');
        this.service.refreshList();
      }, error => {
        this.toastr.error('An error occured, while deleting subject', 'Error');
        console.log(error);
      });
  }

  isDeleteable(record: Subject) {
    return record.Students?.length <= 0 && record.Teacher == null;
  }

  getTooltipForDeleteButton(std: Subject) {
    return this.isDeleteable(std) ? "" : "Delete Students and Teacher associated to this Subject first";
  }

  getAverageGrade(subject: Subject) {
    let resultsForTheSubject = this.resultService?.getList()?.filter(x => x.Subject?.Id == subject.Id);
    let sum = 0;
    if (resultsForTheSubject == null) {
      return 'Grades not assigned yet';
    }
    resultsForTheSubject?.forEach(function (x) {
      sum += x.ObtainedMarks;
    });
    let average = sum / resultsForTheSubject.length;
    let grade = this.gradeService.getList()?.find
      (
        x => x.Course?.Id == subject.Course?.Id &&
          x.StartingMarks <= average &&
          x.EndingMarks >= average
      );
    if (grade == null) {
      return 'N/A';
    }
    return grade?.Title;
  }
}
