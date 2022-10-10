import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';
import { Constants } from '../shared/Constants';
import { ResultService } from '../shared/result.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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
    this.toastr.info('Data populated to form', 'Info');
  }

  deleteStudent(record: Student) {
    this.service.deleteStudent(record.Id).subscribe(
      result => {
        this.toastr.success('Student deleted successfully', 'Success');
      }, error => {
        console.log(error);
        this.toastr.error('An error occured, while deleting student', 'Error');
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