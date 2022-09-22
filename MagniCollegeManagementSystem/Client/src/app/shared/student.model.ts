import { Course } from "./course.model";
import { Grade } from "./grade.model";
import { Subject } from "./subject.model";
import { Teacher } from "./teacher.model";

export class Student {
    Subjects: number[];
    Teachers: number[];
    Id:       number=0;
    Name:     string='';
    Grade:    Grade=null;
    Course:   Course=null;
}

