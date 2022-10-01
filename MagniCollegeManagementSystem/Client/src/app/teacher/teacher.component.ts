import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
import { Course } from '../shared/course.model';
import { Subject } from '../shared/subject.model';
import { Teacher } from '../shared/teacher.model';
import { TeacherService } from '../shared/teacher.service'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(public service: TeacherService,private ngZone: NgZone) { }

  ngOnInit(): void {
    this.service.refreshList();
     window[Constants.teacherComponentReference] = { component: this, zone: this.ngZone, syncData: () => this.service.refreshList() };
  }

  GetSubjectName(subjectId:number)
  {
    return this.service?.allOfferedSubjects?.find(x => x.Id == subjectId)?.Name;
  }
  
  PopulateForm(record: Teacher) {
    this.service.formData = Object.assign({}, record);
    this.service.selectedSubjects = this.getSelctedSubjectListWithAllDetails();
    this.service.selectedCourses = this.getSelctedCourseListWithAllDetails();
    this.service.selectedGender = this.service.formData.Gender;
    this.service.subjectsForSelectedCourses = this.getSubjectsForSelectedCourses();
  }
  
  getSubjectsForSelectedCourses()
  {
    let list: Subject[] = [];
    var subjects = this.service.subjectService.getList();
    var selectedCourses=this.service.selectedCourses;
    
    subjects?.filter(function (x)
    {
      if (selectedCourses.filter(y=>y.Id==x.Course.Id).length>0)
      {
        list.push(x);
      }
    });
    return list;
  }
  
  getSelctedSubjectListWithAllDetails()
  {
    let list: Subject[]=[];
    let form = this.service.formData;
    this.service.subjectService.getList().filter(function (x)
    {
      if (form?.Subjects?.includes(x.Id))
      {
        list.push(x);
      }
    });
    return list;
  }

  getSelctedCourseListWithAllDetails()
  {
    let list: Course[]=[];
    let form = this.service.formData;
    this.service.courseService.getList().filter(function (x)
    {
      if (form?.Courses?.includes(x.Id))
      {
        list.push(x);
      }
    });
    return list;
  }

   DeleteTeacher(record: Teacher) {
     this.service.deleteTeacher(record.Id).subscribe(
       result => {
       }, error => {
         console.log(error);
     });
      if (record.Id == this.service.formData.Id){
        this.service.resetFormData();
    }
  }
}
