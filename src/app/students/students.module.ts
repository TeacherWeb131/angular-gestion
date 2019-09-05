import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentsComponent } from "./students/students.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [StudentsComponent, StudentFormComponent],
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule]
})
export class StudentsModule {}
