import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { Grade } from '../shared/grade.model';
import { GradeService } from '../shared/grade.service'
import { ResultService } from '../shared/result.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styles: [
  ]
})
export class GradeComponent implements OnInit {

  constructor(
    private service: GradeService,
    private resultService: ResultService,
    private ngZone: NgZone,
    private toastr: ToastrService) {
  }
  public gradesList: Grade[];

  ngOnInit(): void {
    this.service.refreshList();

    window[Constants.gradeComponentReference] =
    {
      component: this,
      zone: this.ngZone,
      syncData: () => this.service.refreshList()
    };

    this.service.sourceList$.subscribe(
      list => { this.gradesList = list; }
    );
  }

  populateForm(grade: Grade) {
    this.toastr.info('Data populated to form', 'Info', { closeButton: true });
    this.service.sendFormData(Object.assign({}, grade));
  }

  deleteGrade(grade: Grade) {
    this.service.deleteGrade(grade.Id).subscribe(
      result => {
        this.toastr.success('Grade deleted successfully', 'Success', { closeButton: true });
      }, error => {
        this.toastr.error('An error occured, while deleting grade', 'Error', { closeButton: true });
        console.log(error);
      });
  }

  isDeleteable(grade: Grade) {
    return this.resultService.getList()?.filter(x => x.Grade?.Id == grade.Id)?.length <= 0;
  }

  getTooltipForDeleteButton(grade: Grade) {
    return this.isDeleteable(grade) ? "" : "Delete 'Results' associated to this 'Grade' first";
  }

  getgradesList() {
    console.log("Grades List Retunring");
    return this.gradesList;
  }
}
