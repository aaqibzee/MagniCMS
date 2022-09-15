import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../shared/student.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styles: [
  ]
})
export class StudentFormComponent implements OnInit {

  constructor(public service:StudentService) { }

  ngOnInit(): void {
  }

}
