import { Student } from "./student.model";
import { Subject } from "./subject.model";
import { Teacher } from "./teacher.model";

export class Course {
    Students: Student[]=null;
    Subjects: Subject[]=null;
    Teachers: Teacher[]=null;
    Id:       number=0;
    Name:     string='';
    Code:     string='';
}
