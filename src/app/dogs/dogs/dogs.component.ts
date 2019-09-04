import { Component, OnInit } from "@angular/core";
import { Dog } from "../dog";
import { DogsService } from "../dogs.service";

@Component({
  selector: "app-dogs",
  templateUrl: "./dogs.component.html",
  styleUrls: ["./dogs.component.scss"]
})
export class DogsComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private service: DogsService) {}

  ngOnInit() {
    this.dogs = this.service.getDogs();
  }

  handleDelete(dog: Dog) {
    this.service.deleteDog(dog.id);
    this.dogs = this.service.getDogs();
  }
}
