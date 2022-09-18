import { Student } from "./student.model";

export class Grade {
    Id:        number=0;
    Title:     string='';
    Marks:     number=0;
    SubjectId: number=0;
    Students:  Student[]=null;
}