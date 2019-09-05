import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-arbre-form",
  templateUrl: "./arbre-form.component.html",
  styleUrls: ["./arbre-form.component.scss"]
})
export class ArbreFormComponent implements OnInit {
  arbre;
  // = {
  //   espece: "Cèdre",
  //   details: {
  //     age: 10,
  //     taille: 3
  //   },
  //   donateurs: [
  //     { prenom: "Djamel", nom: "Ait Ammar" },
  //     { prenom: "Joseph", nom: "Durand" }
  //   ]
  // };

  // un FormGroup peut contenir des formcontrol, des formgroup et des
  arbreform: FormGroup;

  // 'this.arbre && ' veut dire si l'arbre existe alors...
  // Cette syntaxe s'appelle une 'évaluation court circuit'
  // doc: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_logiques#%C3%89valuation_court-circuit
  initializeForm() {
    this.arbreform = new FormGroup({
      espece: new FormControl(this.arbre && this.arbre.espece, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40)
      ]),
      details: new FormGroup({
        age: new FormControl(
          this.arbre && this.arbre.details.age,
          Validators.required
        ),
        taille: new FormControl(
          this.arbre && this.arbre.details.taille,
          Validators.required
        )
      }),
      donateurs: new FormArray([])
    });

    if (this.arbre) {
      for (let donateur of this.arbre.donateurs) {
        const tableau = this.arbreform.get("donateurs") as FormArray;

        tableau.push(
          new FormGroup({
            prenom: new FormControl(donateur.prenom),
            nom: new FormControl(donateur.nom)
          })
        );
      }
    }
  }

  addDonateur() {
    const tableau = this.arbreform.get("donateurs") as FormArray;

    tableau.push(
      new FormGroup({
        prenom: new FormControl(),
        nom: new FormControl()
      })
    );
  }

  handleDelete(index: number) {
    const tableau = this.arbreform.get("donateurs") as FormArray;
    tableau.removeAt(index);
  }

  constructor() {}

  ngOnInit() {
    this.initializeForm();
  }

  handleSubmit() {
    console.log(this.arbreform);
  }

  hasError(fieldName: string, errorName: string) {
    return (
      this.arbreform.get(fieldName).hasError(errorName) &&
      this.arbreform.get(fieldName).dirty
    );
  }

  getError(fieldName: string, errorName: string) {
    return this.arbreform.get(fieldName).getError(errorName);
  }
}
