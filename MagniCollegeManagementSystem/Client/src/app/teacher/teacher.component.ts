import { Component, NgZone, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
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
    let subject = this.service?.subjectService?.subjectList?.filter(x => x.Id == subjectId);
    return subject[0]?.Name;
  }t
  
  PopulateForm(record: Teacher) {
     this.service.formData = Object.assign({}, record);
    this.service.selectedSubjects = this.GetSelctedSubjectListWithAllDetails();
    this.service.selectedGender = this.service.formData.Gender;
   }
  
  GetSelctedSubjectListWithAllDetails()
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
