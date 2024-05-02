import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TorneoListComponent } from './_components/torneos/torneo-list/torneo-list.component';
import { EquipoListComponent } from './_components/equipos/equipo-list/equipo-list.component';
import { TorneoDetailComponent } from './_components/torneos/torneo-detail/torneo-detail.component';
import { EquipoDetailComponent } from './_components/equipos/equipo-detail/equipo-detail.component';
import { HomeComponent } from './_components/home/home/home.component';
import { HistoricoCardComponent } from './_components/partidos/historico/historico-card/historico-card.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Torneos', component: TorneoListComponent},
  {path: 'Torneos/:idTorneo', component: TorneoDetailComponent},
  {path: 'Equipos', component: EquipoListComponent},
  {path: 'Equipos/:idEquipo', component: EquipoDetailComponent},
  {path: 'Historial', component: HistoricoCardComponent},
  // {path: 'Admin', component: AppComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
