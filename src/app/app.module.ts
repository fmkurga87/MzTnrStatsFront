import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { TorneoCardComponent } from './_components/torneos/torneo-card/torneo-card.component';
import { TorneoListComponent } from './_components/torneos/torneo-list/torneo-list.component';
import { EquipoListComponent } from './_components/equipos/equipo-list/equipo-list.component';
import { EquipoDetailComponent } from './_components/equipos/equipo-detail/equipo-detail.component';
import { EquipoCardComponent } from './_components/equipos/equipo-card/equipo-card.component';
import { TorneoDetailComponent } from './_components/torneos/torneo-detail/torneo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TorneoCardComponent,
    TorneoListComponent,
    EquipoListComponent,
    EquipoDetailComponent,
    EquipoCardComponent,
    TorneoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
