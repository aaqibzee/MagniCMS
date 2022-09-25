import { Course } from "./course.model";
import { Student } from "./student.model";
import { Subject } from "./subject.model";

export class Teacher {
    Courses:  number[];
    Students: number[];
    Subjects: number[];
    Id:       number=0;
    FirstName: string = '';
    LastName: string = '';
    Gender: string = '';
    Address: string = '';
    ContactNumber: string = '';
    Email:     string='';
}