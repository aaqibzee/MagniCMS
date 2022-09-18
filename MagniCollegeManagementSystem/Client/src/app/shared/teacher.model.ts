import { Course } from "./course.model";
import { Student } from "./student.model";
import { Subject } from "./subject.model";

export class Teacher {
    Courses:  Course[]=null;
    Students: Student[]=null;
    Subjects: Subject[]=null;
    Id:       number=0;
    Name:     string='';
}

