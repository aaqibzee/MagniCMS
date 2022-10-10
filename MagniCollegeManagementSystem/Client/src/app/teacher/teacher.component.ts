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

  constructor(
    public subjectService: SubjectService,
    public service: TeacherService,
    public courseService: CourseService,
    private ngZone: NgZone,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.service.refreshList();
    window[Constants.teacherComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
  }

  getSubjectName(subjectId: number) {
    return this.subjectService.getList()?.find(x => x.Id == subjectId)?.Name;
  }

  populateForm(record: Teacher) {
    this.service.formData = Object.assign({}, record);
    this.service.selectedSubjects = this.getSelctedSubjectListWithAllDetails();
    this.service.selectedCourses = this.getSelctedCourseListWithAllDetails();
    this.service.subjectsForSelectedCourses = this.getSubjectsForSelectedCourses();
    this.toastr.info('Data populated to form', 'Info');
  }

  getSubjectsForSelectedCourses() {
    let list: Subject[] = [];
    var subjects = this.service.subjectService.getList();
    var selectedCourses = this.service.selectedCourses;

    subjects?.filter(function (x) {
      if (selectedCourses.filter(y => y.Id == x.Course.Id).length > 0) {
        list.push(x);
      }
    });
    return list;
  }

  getSelctedSubjectListWithAllDetails() {
    let list: Subject[] = [];
    let form = this.service.formData;
    this.service.subjectService.getList().filter(function (x) {
      if (form?.Subjects?.includes(x.Id)) {
        list.push(x);
      }
    });
    return list;
  }

  getSelctedCourseListWithAllDetails() {
    let list: Course[] = [];
    let form = this.service.formData;
    this.courseService.getList().filter(function (x) {
      if (form?.Courses?.includes(x.Id)) {
        list.push(x);
      }
    });
    return list;
  }

  deleteTeacher(record: Teacher) {
    this.service.deleteTeacher(record.Id).subscribe(
      result => {
        this.toastr.success('Teacher deleted successfully', 'Success');
      }, error => {
        this.toastr.error('An error occured, while deleting teacher', 'Error');
        console.log(error);
      });
    if (record.Id == this.service.formData.Id) {
      this.service.resetFormData();
    }
  }
  isDeleteable(record: Teacher) {
    return record.Subjects?.length <= 0;
  }

  getTooltipForDeleteButton(std: Teacher) {
    return this.isDeleteable(std) ? "" : "Delete Subjects associated to this Teacher first";
  }
}
