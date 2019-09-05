import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ClientsModule } from "./clients/clients.module";
import { RoutingModule } from "./routing.module";

import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { UiModule } from "./ui/ui.module";
import { ChaisesComponent } from "./chaises/chaises.component";
import { ChaiseFormComponent } from "./chaise-form/chaise-form.component";
import { FormsModule } from "@angular/forms";
import { DogsComponent } from "./dogs/dogs/dogs.component";
import { DogFormComponent } from "./dogs/dog-form/dog-form.component";
import { HttpClientModule } from "@angular/common/http";
import { StudentsComponent } from "./students/students/students.component";
import { StudentFormComponent } from "./students/student-form/student-form.component";

// 3 imports pour importer la devise locale (euro france)
// the second parameter 'fr' is optional
registerLocaleData(localeFr, "fr");

@NgModule({
  declarations: [
    AppComponent,
    ChaisesComponent,
    ChaiseFormComponent,
    DogsComponent,
    DogFormComponent,
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    UiModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
