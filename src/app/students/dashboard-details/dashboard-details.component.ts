import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../students.service";
import { ActivatedRoute } from "@angular/router";
import { Student } from "../student";
import { map, switchMap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dashboard-details",
  templateUrl: "./dashboard-details.component.html",
  styleUrls: ["./dashboard-details.component.scss"]
})
export class DashboardDetailsComponent implements OnInit {
  student: Student;
  studentSubscription: Subscription;
  constructor(
    private service: StudentsService,
    private route: ActivatedRoute
  ) {}

  // ANCIENNE VERSION
  // ngOnInit() {
  //   // 1) On veut réagir aux changements des paramètres dans l'URL
  //   // => On reçoit les paramètres lorsqu'ils changent
  //   this.route.paramMap.subscribe(params => {
  //     // 2) On demande le paramètre "id" sous la forme d'un nombre
  //     // (c'est l'identifiant du student)
  //     const id = +params.get("id");
  //     // 3) On va chercher le student qui correspond à l'id et on réagit
  //     // lorsqu'on reçoit les données du serveur
  //     this.service
  //       .getStudent(id)
  //       .subscribe(student => (this.student = student));
  //   });
  // }

  // NOUVELLE VERSION
  ngOnInit() {
    this.studentSubscription = this.route.paramMap
      .pipe(
        map(params => +params.get("id")),
        switchMap(id => this.service.getStudent(id))
      )
      .subscribe(student => (this.student = student));
  }

  ngOnDestroy() {
    this.studentSubscription.unsubscribe();
  }
}
