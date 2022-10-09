import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { GradeService } from '../shared/grade.service';
import { ResultService } from '../shared/result.service';
import { Subject } from '../shared/subject.model';
import { SubjectService } from '../shared/subject.service'

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
    private ngZone: NgZone) { }

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

  IsDeleteable(record: Subject) {
    return record.Students?.length <= 0 && record.Teacher == null;
  }

  GetTooltipForDeleteButton(std: Subject) {
    return this.IsDeleteable(std) ? "" : "Delete Students and Teacher associated to this Subject first";
  }

  GetAverageGrade(subject: Subject) {
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
