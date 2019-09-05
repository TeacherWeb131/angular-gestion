import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-car-form",
  templateUrl: "./car-form.component.html",
  styleUrls: ["./car-form.component.scss"]
})
export class CarFormComponent implements OnInit {
  car;
  // = {
  //   marque: "Peugeot",
  //   modele: "1008",
  //   age: 5,
  //   enVente: true
  // };

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initializeForm();
  }

  handleSubmit() {
    console.log(this.form);
  }

  initializeForm() {
    // Ici on initialise le formulaire
    this.form = new FormGroup({
      marque: new FormControl(this.car && this.car.marque, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      modele: new FormControl(this.car && this.car.modele, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      age: new FormControl(this.car && this.car.age, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2)
      ]),
      enVente: new FormControl(this.car && this.car.enVente)
    });
  }
}
