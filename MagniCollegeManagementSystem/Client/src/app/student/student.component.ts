import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';
import { Constants } from '../shared/Constants';
import { ResultService } from '../shared/result.service';
import { ToastrService } from 'ngx-toastr';
import { SplashScreenStateService } from '../shared/splash-screen-state.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {

  constructor(
    private ngZone: NgZone,
    public service: StudentService,
    public resultService: ResultService,
    private toaster: ToastrService
  ) {
    this.service.refreshList();
    this.resultService.refreshList();
  }
  deleteButtonToolTip: string = '';
  @Input() selectedItem: string = '';

  ngOnInit(): void {
    window[Constants.studentComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
  }
  updateStudent(record: Student) {
    this.service.populateForm(record);
    this.toaster.info('Data populated to form', 'Info', { closeButton: true });
  }

  deleteStudent(record: Student) {
    this.service.deleteStudent(record.Id).subscribe(
      result => {
        this.toaster.success('Student deleted successfully', 'Success', { closeButton: true });
      }, error => {
        console.log(error);
        this.toaster.error('An error occured, while deleting student', 'Error', { closeButton: true });
      });
    if (record.Id == this.service.formData.Id) {
      this.service.resetFormData();
    }

  }
  getSubjectName(subjectId: number, stdId: number) {
    let subject = this.service?.subjectService?.subjectList?.find(x => x.Id == subjectId);
    return subject?.Name;
  }

  getAvailedCreditHours(student: Student) {
    let availedCreditHourse = 0;
    let subjects = this.service?.subjectService?.subjectList?.
      filter(x => student.Subjects?.includes(x.Id));

    subjects?.forEach(x => {
      availedCreditHourse += x.CreditHours;
    });
    return availedCreditHourse
  }
  getGrade(subjectId: number, stdId: number) {
    let subject = this.service?.subjectService?.subjectList?.find(x => x.Id == subjectId);
    let result = this.resultService.resultsList?.find(x => x.Student?.Id == stdId && x.Subject?.Id == subject.Id);
    return result?.Grade?.Title ? "(" + result?.Grade?.Title + ")" : "TBD";
  }

  isDeleteable(std: Student) {
    return std.Results?.length <= 0;
  }

  getTooltipForDeleteButton(std: Student) {
    return this.isDeleteable(std) ? "" : "Delete Results associated to this Student first";
  }
}