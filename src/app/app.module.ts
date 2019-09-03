import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ClientsModule } from "./clients/clients.module";
import { RoutingModule } from "./routing.module";

// Les 3 lignes ci-dessous pour importer la devise locale (euro france)
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { UiModule } from "./ui/ui.module";
// the second parameter 'fr' is optional
registerLocaleData(localeFr, "fr");

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutingModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
