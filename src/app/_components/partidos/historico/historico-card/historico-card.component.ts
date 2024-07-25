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
}
