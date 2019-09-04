import { Injectable } from "@angular/core";
import { Dog } from "./dog";

@Injectable({
  providedIn: "root"
})
export class DogsService {
  dogs: Dog[] = [
    { id: 1, name: "polo", breed: "berger" },
    { id: 2, name: "korky", breed: "caniche" },
    { id: 3, name: "joe", breed: "buldog" },
    { id: 4, name: "billy", breed: "boxer" }
  ];

  constructor() {}

  getDogs(): Dog[] {
    return this.dogs.slice();
  }

  getDog(id: number): Dog {
    const dog = this.dogs.find(dog => dog.id === id);
    return { ...dog };
  }

  createDog(dog: Dog) {
    dog.id = new Date().getTime();
    this.dogs.push(dog);
  }

  updateDog(dog: Dog): boolean {
    const index = this.dogs.findIndex(d => d.id === dog.id);
    if (index > -1) {
      this.dogs[index] = dog;
      return true;
    }
    return false;
  }

  deleteDog(id: number) {
    const index = this.dogs.findIndex(dog => dog.id === id);

    if (index > -1) {
      this.dogs.splice(index, 1);
    }
  }
}
