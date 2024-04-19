import { Component, OnInit } from '@angular/core';
import { TorneoLista } from '../../../_models/torneos/torneoLista';
import { TorneosService } from '../../../_services/torneos.service';

@Component({
  selector: 'app-torneo-list',
  templateUrl: './torneo-list.component.html',
  styleUrl: './torneo-list.component.css'
})
export class TorneoListComponent implements OnInit {
  torneos : TorneoLista[] = [];
  torneosAgrupados: { [temporadaMZ: number]: TorneoLista[] } = {};

  constructor(private torneosService: TorneosService) {
    
  }

  ngOnInit(): void {
    this.torneosService.getListaTorneos().subscribe({
      next: response =>{ 
                          this.torneos = response,
                          console.log(response)
                        },
      error: error => console.log(error),
    })

    console.log("Voy a agrupar");
    this.torneosAgrupados = this.agruparPorTemporadaMZ(this.torneos);

    console.log(this.torneosAgrupados);
  }

  // Función para agrupar torneos por temporadaMZ
  agruparPorTemporadaMZ(torneos: TorneoLista[]): { [temporadaMZ: number]: TorneoLista[] } {
    return torneos.reduce((acumulador: any = [], torneo) => {
      if (!acumulador[torneo.temporadaMZ]) {
        acumulador[torneo.temporadaMZ];
      }
      acumulador[torneo.temporadaMZ].push(torneo);
      return acumulador;
      }, {});
  }
}
