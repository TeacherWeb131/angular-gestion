import { Component, OnInit } from "@angular/core";
import { Student } from "../student";
import { StudentsService } from "../students.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(private service: StudentsService) {}

  ngOnInit() {
    this.service
      .getStudents()
      .subscribe((students: Student[]) => (this.students = students));
  }
}
