import { Component, OnInit } from "@angular/core";
import { Chaise } from "../chaise";
import { ChaisesService } from "../chaises.service";

@Component({
  selector: "app-chaises",
  template: `
    <h2>Liste des chaises</h2>

    <a routerLink="/chaises/new" class="btn btn-primary">Créer une chaise</a>

    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Chaise</th>
          <th>Prix</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr *ngFor="let chaise of chaises">
          <td>{{ chaise.id }}</td>
          <td>
            <a routerLink="/chaises/{{ chaise.id }}">
              {{ chaise.name }}
            </a>
          </td>
          <td>{{ chaise.price | currency: "EUR" }}</td>
          <td>
            <button
              class="btn btn-danger btn-sm"
              (click)="handleDelete(chaise)"
            >
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class ChaisesComponent implements OnInit {
  chaises: Chaise[] = [];

  constructor(private service: ChaisesService) {}

  ngOnInit() {
    // this.chaises = this.service.getChaises();
    this.service
      .getChaises()
      .subscribe((chaises: Chaise[]) => (this.chaises = chaises));
  }

  handleDelete(chaise: Chaise) {
    this.service.deleteChaise(chaise.id).subscribe(
      () => {
        const index = this.chaises.findIndex(c => c.id === chaise.id);
        this.chaises.splice(index, 1);
      },
      error => {
        window.alert(
          "Désolé, nous n'avons pas réussi à supprimer cette chaise"
        );
      }
    );
  }
}
