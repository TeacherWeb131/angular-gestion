import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ClientsComponent } from "./clients/clients/clients.component";
import { ClientFormComponent } from "./clients/client-form/client-form.component";
import { ClientsModule } from "./clients/clients.module";

const routes: Routes = [
  { path: "clients", component: ClientsComponent },
  { path: "clients/:id", component: ClientFormComponent },
  { path: "", redirectTo: "/clients", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), ClientsModule],
  exports: [RouterModule]
})
export class RoutingModule {}
