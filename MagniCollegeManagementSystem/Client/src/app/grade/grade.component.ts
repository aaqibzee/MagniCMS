import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { Grade } from '../shared/grade.model';
import { GradeService } from '../shared/grade.service'
import { ResultService } from '../shared/result.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styles: [
  ]
})
export class GradeComponent implements OnInit {

  constructor(
    public service: GradeService,
    public resultService: ResultService,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    this.service.refreshList();
    window[Constants.gradeComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
  }

  PopulateForm(grade: Grade) {
    //assign the object copy and not the original object
    this.service.formData = Object.assign({}, grade);
  }

  DeleteGrade(grade: Grade) {
    this.service.deleteGrade(grade.Id).subscribe(
      result => {

      }, error => {
        console.log(error);
      });
  }

  IsDeleteable(grade: Grade) {
    return this.resultService.getList()?.filter(x => x.Grade?.Id == grade.Id)?.length <= 0;
  }

  GetTooltipForDeleteButton(grade: Grade) {
    return this.IsDeleteable(grade) ? "" : "Delete Results associated to this Grade first";
  }
}
