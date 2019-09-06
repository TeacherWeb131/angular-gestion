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
import { StudentFormComponent } from "./students/student-form/student-form.component";
import { StudentsComponent } from "./students/students/students.component";
import { ArbreFormComponent } from "./arbre-form/arbre-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CarFormComponent } from "./car-form/car-form.component";
import { DashboardComponent } from "./students/dashboard/dashboard.component";
import { DashboardDetailsComponent } from "./students/dashboard-details/dashboard-details.component";
import { DashboardDetailsEditComponent } from "./students/dashboard-details-edit/dashboard-details-edit.component";
import { StudentsModule } from "./students/students.module";

const routes: Routes = [
  { path: "clients", component: ClientsComponent },
  { path: "clients/:id", component: ClientFormComponent },
  { path: "chaises", component: ChaisesComponent },
  { path: "chaises/:id", component: ChaiseFormComponent },
  { path: "dogs", component: DogsComponent },
  { path: "dogs/:id", component: DogFormComponent },
  { path: "students/:id", component: StudentFormComponent },
  { path: "students", component: StudentsComponent },
  { path: "arbre", component: ArbreFormComponent },
  { path: "car", component: CarFormComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: ":id", component: DashboardDetailsComponent },
      { path: ":id/edit", component: DashboardDetailsEditComponent }
    ]
  },
  { path: "", redirectTo: "/clients", pathMatch: "full" }
];

@NgModule({
  declarations: [ArbreFormComponent, CarFormComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ClientsModule,
    ReactiveFormsModule,
    StudentsModule
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
