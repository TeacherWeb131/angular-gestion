import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentsComponent } from "./students/students.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardDetailsComponent } from "./dashboard-details/dashboard-details.component";
import { DashboardDetailsEditComponent } from "./dashboard-details-edit/dashboard-details-edit.component";

@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormComponent,
    DashboardComponent,
    DashboardDetailsComponent,
    DashboardDetailsEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule {}
