import { Student } from "./student.model";
import { Subject } from "./subject.model";
import { Teacher } from "./teacher.model";

export class Course {
    Students: number[];
    Subjects: number[];
    Teachers: number[];
    Id:       number=0;
    Name:     string='';
    Code: string = '';
    NumberOfSubjectsAllowed:number=0;
}
