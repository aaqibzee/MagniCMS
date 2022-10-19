import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { Course } from '../shared/course.model';
import { CourseService } from '../shared/course.service';
import { Subject } from '../shared/subject.model';
import { SubjectService } from '../shared/subject.service';
import { Teacher } from '../shared/teacher.model';
import { TeacherService } from '../shared/teacher.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor
    (
      public subjectService: SubjectService,
      public service: TeacherService,
      public courseService: CourseService,
      private ngZone: NgZone,
      private toaster: ToastrService
    ) { }
  public teacherList: Teacher[];

  ngOnInit(): void {
    this.service.refreshList();

    window[Constants.teacherComponentReference] =
    {
      component: this,
      zone: this.ngZone,
      syncData: () => this.service.refreshList()
    };

    this.service.sourceList$.subscribe(
      list => { this.teacherList = list; }
    );
  }


  getSubjectName(subjectId: number) {
    return this.subjectService.getList()?.find(x => x.Id == subjectId)?.Name;
  }

  populateForm(record: Teacher) {
    this.service.populateForm(record);
  }

  deleteTeacher(record: Teacher) {
    this.service.deleteTeacher(record.Id).subscribe(
      result => {
        this.toaster.success('Teacher deleted successfully', 'Success', { closeButton: true });
      }, error => {
        this.toaster.error('An error occured, while deleting teacher', 'Error', { closeButton: true });
        console.log(error);
      });
    this.service.resetFormDataPostDataDeletion(record.Id);
  }
  isDeleteable(record: Teacher) {
    return record.Subjects?.length <= 0;
  }

  getTooltipForDeleteButton(std: Teacher) {
    return this.isDeleteable(std) ? "" : "Delete Subjects associated to this Teacher first";
  }
}
