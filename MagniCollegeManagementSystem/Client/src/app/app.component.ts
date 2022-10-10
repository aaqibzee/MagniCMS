import { Component } from '@angular/core';
import { CourseService } from './shared/course.service';
import { GradeService } from './shared/grade.service';
import { ResultService } from './shared/result.service';
import { SplashScreenStateService } from './shared/splash-screen-state.service';
import { StudentService } from './shared/student.service';
import { SubjectService } from './shared/subject.service';
import { TeacherService } from './shared/teacher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private splashScreenStateService: SplashScreenStateService,
  ) { }

  title = 'Client';
  ngOnInit(): void {
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 2);
  }
}