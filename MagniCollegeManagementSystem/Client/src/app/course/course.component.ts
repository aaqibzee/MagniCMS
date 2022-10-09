import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { Course } from '../shared/course.model';
import { CourseService } from '../shared/course.service'
import { GradeService } from '../shared/grade.service';
import { ResultService } from '../shared/result.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: [
  ]
})
export class CourseComponent implements OnInit {

  constructor(
    public service: CourseService,
    private ngZone: NgZone,
    public resultService: ResultService,
    public gradeService: GradeService) {

    gradeService.refreshList();
    resultService.refreshList();

  }


  ngOnInit(): void {
    this.service.refreshList();
    window[Constants.courseComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
  }

  PopulateForm(course: Course) {
    //assign the object copy and not the original object
    this.service.formData = Object.assign({}, course);
  }

  GetAverageGrade(course: Course) {
    let resultsForTheCourse = this.resultService.getList()?.filter(x => x.Course.Id == course.Id);
    let sum = 0;
    if (resultsForTheCourse == null) {
      return 'Grades not assigned yet';
    }
    resultsForTheCourse?.forEach(function (x) {
      sum += x.ObtainedMarks;
    });
    let average = sum / resultsForTheCourse.length;
    let grade = this.gradeService.getList()?.find
      (
        x => x.Course.Id == course.Id &&
          x.StartingMarks <= average &&
          x.EndingMarks >= average
      );
    if (grade == null) {
      return 'N/A';
    }
    return grade?.Title;
  }

  DeleteCourse(course: Course) {
    this.service.deleteCourse(course.Id).subscribe(
      result => {
      }, error => {
        console.log(error);
      });
  }

  IsDeleteable(course: Course) {
    var result = course.Students?.length <= 0
      && course.Teachers?.length <= 0
      && course.Subjects?.length <= 0;
    return result;
  }

  GetTooltipForDeleteButton(course: Course) {
    return this.IsDeleteable(course) ? "" : "Delete Students, Teachers and Subjects associated to this Course first";
  }
}