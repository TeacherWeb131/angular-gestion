import { Component, OnInit } from "@angular/core";
import { DogsService } from "../dogs.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Dog } from "../dog";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-dog-form",
  templateUrl: "./dog-form.component.html",
  styleUrls: ["./dog-form.component.scss"]
})
export class DogFormComponent implements OnInit {
  dog: Dog;

  constructor(
    private service: DogsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id != "new") {
      this.dog = this.service.getDog(+id);
    }
  }

  handleSubmit(leform: NgForm) {
    if (leform.invalid) return false;

    if (this.dog) {
      this.service.updateDog({ ...this.dog, ...leform.value });
    } else {
      this.service.createDog(leform.value);
    }
    // Après update ou create, redirection vers l'url de la liste des chiens
    this.router.navigateByUrl("/dogs");
  }
}
