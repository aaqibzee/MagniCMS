
import { Course } from "./course.model";
import { Subject } from "./subject.model";

export class Grade {
    Id:        number=0;
    Title:     string='';
    StartingMarks: number = 0;
    EndingMarks: number = 0;
    Course: Course=null;
    //Subject: Subject=null;
    Students:  number[];
}