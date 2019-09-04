import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ClientsComponent } from "./clients/clients/clients.component";
import { ClientFormComponent } from "./clients/client-form/client-form.component";
import { ClientsModule } from "./clients/clients.module";
import { ChaisesComponent } from "./chaises/chaises.component";
import { ChaiseFormComponent } from "./chaise-form/chaise-form.component";
import { DogsComponent } from "./dogs/dogs/dogs.component";
import { DogFormComponent } from "./dogs/dog-form/dog-form.component";

const routes: Routes = [
  { path: "clients", component: ClientsComponent },
  { path: "clients/:id", component: ClientFormComponent },
  { path: "chaises", component: ChaisesComponent },
  { path: "chaises/:id", component: ChaiseFormComponent },
  { path: "dogs", component: DogsComponent },
  { path: "dogs/:id", component: DogFormComponent },
  { path: "", redirectTo: "/clients", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), ClientsModule],
  exports: [RouterModule]
})
export class RoutingModule {}
