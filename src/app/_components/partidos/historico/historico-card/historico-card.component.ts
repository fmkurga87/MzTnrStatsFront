import { Component, input, OnInit } from '@angular/core';
import { PartidosService } from '../../../../_services/partidos.service';
import { BuscarHistorialResponse } from '../../../../_models/partidos/buscar-historial-response';

@Component({
  selector: 'app-historico-card',
  templateUrl: './historico-card.component.html',
  styleUrl: './historico-card.component.css'
})
export class HistoricoCardComponent{
  partidosFromFiltro = input.required<BuscarHistorialResponse>(); 

  constructor(private partidosService : PartidosService) 
  {  
    
  }
  // ngOnInit(): void {
  //   this.loadHistorico();
  // }

  // loadHistorico()
  // {
  //   //const equipo =  this.route.snapshot.paramMap.get('idEquipo');
  //   //if (!equipo) return;
  //   // this.partidosService.getHistorico().subscribe({
  //   //                                               next: response =>{ 
  //   //                                                                   this.historico = response
  //   //                                                                 },
  //   //                                               error: error => console.log(error)
  //   //                                             })
  // }
}
