import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngular } from '../components/hooksangular/kooksangular.component';
import { DeportesComponent } from '../components/deportes/deportes.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
