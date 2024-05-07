import { Component } from '@angular/core';
import { PartidosService } from '../../../../_services/partidos.service';
import { BuscarHistorialResponse } from '../../../../_models/partidos/buscar-historial-response';

@Component({
  selector: 'app-historico-filter',
  templateUrl: './historico-filter.component.html',
  styleUrl: './historico-filter.component.css'
})
export class HistoricoFilterComponent {
  historico : BuscarHistorialResponse | undefined;

  constructor(private partidosService : PartidosService) 
  {  
    
  }
  
  loadHistorico()
  {
    //const equipo =  this.route.snapshot.paramMap.get('idEquipo');
    //if (!equipo) return;
    this.partidosService.getHistorico().subscribe({
                                                  next: response =>{ 
                                                                      this.historico = response
                                                                    },
                                                  error: error => console.log(error)
                                                })
  }

}
