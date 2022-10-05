import { Course } from "./course.model";
import { Grade } from "./grade.model";

export class Student {
    Subjects: number[];
    Id: number = 0;
    RegisterationNumber: string = '';
    Name: string = '';
    Grade:    Grade=null;
    Course: Course = null;
     Birthday: string = '';
}

