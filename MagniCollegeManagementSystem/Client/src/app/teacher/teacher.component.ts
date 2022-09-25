import { Component, OnInit } from '@angular/core';
import { Subject } from '../shared/subject.model';
import { Teacher } from '../shared/teacher.model';
import { TeacherService } from '../shared/teacher.service'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(public service: TeacherService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  GetSubjectName(subjectId:number)
  {
    let subject = this.service?.subjectService?.subjectList?.filter(x => x.Id == subjectId);
    return subject[0]?.Name;
  }
  
  PopulateForm(record: Teacher) {
    //assign the object copy and not the original object
     this.service.formData = Object.assign({}, record);
    this.service.selectedSubjects=this.GetSelctedSubjectListWithAllDetails();
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
        this.service.refreshList();
       }, error => {
         console.log(error);
     });
      if (record.Id == this.service.formData.Id){
        this.service.resetFormData();
    }
  }
}
