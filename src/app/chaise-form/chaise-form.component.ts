import { Component, OnInit } from "@angular/core";
import { Chaise } from "../chaise";
import { ChaisesService } from "../chaises.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-chaise-form",
  template: `
    <h2>Création d'une chaise</h2>

    <form #monform="ngForm" (ngSubmit)="handleSubmit(monform)">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="Nom de la chaise"
          [ngModel]="chaise?.name"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="price"
          placeholder="Prix de la chaise (en €)"
          [ngModel]="chaise?.price"
        />
      </div>
      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>

    {{ chaise | json }}
  `,
  styles: []
})
export class ChaiseFormComponent implements OnInit {
  chaise: Chaise;

  constructor(
    private service: ChaisesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id != "new") {
      // this.chaise = this.service.getChaise(+id);
      this.service
        .getChaise(+id)
        .subscribe((chaise: Chaise) => (this.chaise = chaise));
    }
  }

  handleSubmit(leform: NgForm) {
    if (leform.invalid) return;

    if (this.chaise) {
      this.service.updateChaise({ ...this.chaise, ...leform.value }).subscribe(
        resultat => {
          this.router.navigateByUrl("/chaises");
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.service.createChaise(leform.value).subscribe(
        () => {
          this.router.navigateByUrl("/chaises");
        },
        () => {
          console.log("Ce n'est pas bon");
        }
      );
    }
  }
}
