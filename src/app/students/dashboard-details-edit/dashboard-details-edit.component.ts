import { Component, OnInit } from "@angular/core";
import { Student } from "../student";
import { StudentsService } from "../students.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-dashboard-details-edit",
  templateUrl: "./dashboard-details-edit.component.html",
  styleUrls: ["./dashboard-details-edit.component.scss"]
})
export class DashboardDetailsEditComponent implements OnInit {
  student: Student;
  form: FormGroup;

  constructor(
    private service: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // 1) On veut réagir aux changements des paramètres dans l'URL
    // => On reçoit les paramètres lorsqu'ils changent
    this.route.paramMap.subscribe(params => {
      // 2) On demande le paramètre "id" sous la forme d'un nombre
      // (c'est l'identifiant du student)
      const id = +params.get("id");
      // 3) On va chercher le student qui correspond à l'id et on réagit
      // lorsqu'on reçoit les données du serveur
      this.service.getStudent(id).subscribe(student => {
        // On prend les données récupérées et on les met dans la propriété student de la classe
        this.student = student;
        // On initialise le formulaire
        this.initializeForm();
      });
    });

    // On initialise le formulaire
    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      firstName: new FormControl(this.student && this.student.firstName),
      lastName: new FormControl(this.student && this.student.lastName),
      age: new FormControl(this.student && this.student.age),
      avatar: new FormControl(this.student && this.student.avatar),
      funded: new FormControl(this.student && this.student.funded)
    });
  }

  // Validation du formulaire de modification de l'étudiant
  handleSubmit() {
    if (this.form.invalid) return;

    // Fusionner les infos du formulaire et les infos du student
    const student = { ...this.student, ...this.form.value };

    this.service.updateStudent(student).subscribe(() => {
      // on declenche un evenement sur l'observable dataChanged qui va emettre cet evenement
      this.service.dataChanged.next(
        `L'étudiant ${student.firstName} a bien été modifié `
      );
      // Redirection
      this.router.navigateByUrl("/dashboard/" + student.id);
    });
  }
}
