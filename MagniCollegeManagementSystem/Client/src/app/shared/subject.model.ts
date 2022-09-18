import { Course } from "./course.model";
import { Student } from "./student.model";
import { Teacher } from "./teacher.model";

export class Subject {
    Students: Student[];
    Id:       number=0;
    Name:     string='';
    Code:     string='';
    Teacher:  Teacher=null;
    Course:   Course=null;
}