import { Course } from "./course.model";
import { Grade } from "./grade.model";

export class Student {
    Subjects: number[];
    Id: number = 0;
    RegistrationNumber: string = '';
    FirstName: string = '';
    LastName: string = '';
    Birthday: string = '';
    Gender: string = '';
    Address: string = '';
    ContactNumber:string='';
    Grade:    Grade=null;
    Course: Course = null;
    RemainingCreditHours: number = 0;
}

