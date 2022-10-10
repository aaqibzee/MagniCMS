import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/shared/course.model';
import { CourseService } from 'src/app/shared/course.service';
import { Grade } from 'src/app/shared/grade.model';
import { GradeService } from 'src/app/shared/grade.service';
import { ResultService } from 'src/app/shared/result.service';
import { Student } from 'src/app/shared/student.model';
import { StudentService } from 'src/app/shared/student.service';
import { Subject } from 'src/app/shared/subject.model';
import { SubjectService } from 'src/app/shared/subject.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.css']
})
export class ResultFormComponent implements OnInit {

  subjectsInSelectedCourse: Subject[];
  studentsInSelectedSubject: Student[];
  gradesInSelectedCourse: Grade[];
  gradeLabelText: string = 'Enter obtained marks to calculate grade';
  gradeLabelTextClass: string = "text-info";
  @ViewChild('selectedSubject') selectedSubject;
  constructor(public service: ResultService,
    public studentService: StudentService,
    public subjectService: SubjectService,
    public gradeService: GradeService,
    public courseService: CourseService,
    private toastr: ToastrService) {
    this.studentService.refreshList();
    this.subjectService.refreshList();
    this.gradeService.refreshList();
    this.courseService.refreshList();
  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (this.service.IsFormInvalid()) {
      this.service.SetValidationMessages();
    }
    else {
      if (this.service.formData.Id == 0) {
        this.inserRecord(form);
      }
      else {
        this.updateRecord(form);
      }
    }
  }

  calculateGrade() {
    let obMarks = this.service.formData.ObtainedMarks;
    let course = this.service.formData.Course;

    if (course == null) {
      this.gradeLabelText = "Select a Course, and a subject first";
      this.gradeLabelTextClass = "text-danger";
      return;
    }

    let grades = this.gradeService.gradesList.filter(x => x.Course.Id == course.Id)
    if (grades == null) {
      this.gradeLabelText = "No grades available for the selected subject";
      this.gradeLabelTextClass = "text-info";
      return;
    }

    let grade = grades?.find(x => x.StartingMarks <= obMarks && x.EndingMarks >= obMarks);
    if (grade == null) {
      this.gradeLabelText = "No grade available for given marks range ";
      this.gradeLabelTextClass = "text-info";
      return;
    }
    this.service.formData.Grade = grade;
    this.gradeLabelText = grade?.Title;
  }

  onCourseSelect(course: Course) {
    this.service.formData.Course = course;
    this.subjectsInSelectedCourse = this.subjectService.subjectList.filter(x => x.Course.Id == course.Id);
    this.gradesInSelectedCourse = this.gradeService.gradesList.filter(x => x.Course?.Id == course.Id);
    this.service.formData.Student = null;
    this.service.formData.Subject = null;
    this.selectedSubject.value = '';
    this.service.CourseSelcetValidationMesage = '';
  }

  onStudentSelect(student: Student) {
    this.service.formData.Student = student;
    this.service.StudentSelcetValidationMesage = '';
  }

  onSubjectSelect(subject: Subject) {
    this.service.formData.Subject = subject;
    this.studentsInSelectedSubject = this.studentService.studentsList.filter(x => x.Subjects.includes(subject.Id));
    this.service.SubjectSelcetValidationMesage = '';
  }

  inserRecord(form: NgForm) {
    this.service.postResult().subscribe(
      result => {
        this.toastr.success('Result added successfully', 'Success');
        this.resetForm(form);
      }, error => {
        this.toastr.error('An error occured while adding the new result', 'Error');
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putResult().subscribe(
      result => {
        this.toastr.success('Result updated successfully', 'Success');
        this.resetForm(form);
      }, error => {
        this.toastr.error('An error occured while updating the new result', 'Error');
        console.log(error);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.resetFormData();
    this.gradeLabelText = 'Enter obtained marks to calculate grade';
    this.gradeLabelTextClass = "text-info";
  }
}
