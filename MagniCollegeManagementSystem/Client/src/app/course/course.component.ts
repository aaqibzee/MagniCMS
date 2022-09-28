import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { Course } from '../shared/course.model';
import { CourseService } from '../shared/course.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: [
  ]
})
export class CourseComponent implements OnInit {

  constructor(public service: CourseService, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.service.refreshList();
     window[Constants.courseComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
  }

   PopulateForm(record: Course) {
    //assign the object copy and not the original object
    this.service.formData =  Object.assign({}, record);
  }

   DeleteCourse(record: Course) {
     this.service.deleteCourse(record.Id).subscribe(
       result => {
       }, error => {
         console.log(error);
       });
  }
}

