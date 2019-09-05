import { Component, OnInit } from "@angular/core";
import { Student } from "../student";
import { StudentsService } from "../students.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.scss"]
})
export class StudentFormComponent implements OnInit {
  student: Student;
  constructor(
    private service: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id != "new") {
      this.service
        .getStudent(+id)
        .subscribe((student: Student) => (this.student = student));
    }
  }

  handleSubmit(leform: NgForm) {
    if (leform.invalid) return;

    if (this.student) {
      this.service
        .updateStudent({ ...this.student, ...leform.value })
        .subscribe(
          resultat => {
            this.router.navigateByUrl("/students");
          },
          error => {
            console.log(error);
          }
        );
    } else {
      this.service.createStudent(leform.value).subscribe(
        () => {
          this.router.navigateByUrl("/students");
        },
        () => {
          console.log("Ce n'est pas bon");
        }
      );
    }
  }
}
