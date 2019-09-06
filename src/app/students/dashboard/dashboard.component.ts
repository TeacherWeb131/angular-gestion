import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../students.service";
import { Student } from "../student";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];
  message: string;
  constructor(private studentService: StudentsService) {}

  ngOnInit() {
    this.loadStudents();

    // Ci-dessous, on met à jour l'étudiant modifié dans le composant affichant la liste des étudiants
    this.studentService.dataChanged.subscribe((data: string) => {
      this.message = data;
      window.setTimeout(() => {
        this.message = "";
      }, 2000);
      this.loadStudents();
    });
  }

  private loadStudents() {
    this.studentService
      .getStudents()
      .subscribe(students => (this.students = students));
  }
}
