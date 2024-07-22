import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../../../../_services/partidos.service';
import { BuscarHistorialResponse } from '../../../../_models/partidos/buscar-historial-response';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscarHistorialRequest } from '../../../../_models/partidos/buscar-historial-request';

@Component({
  selector: 'app-historico-filter',
  templateUrl: './historico-filter.component.html',
  styleUrl: './historico-filter.component.css'
})
export class HistoricoFilterComponent implements OnInit{
  busquedaEquipos!: FormGroup;
  historico!: BuscarHistorialResponse;
  mostrarTarjeta = false;

  constructor(private fb: FormBuilder, private partidosService : PartidosService) 
  {  
    
  }
  
  ngOnInit(): void {
    this.busquedaEquipos = this.fb.group({
      idEquipo1: ['', Validators.required],
      idEquipo2: ['', Validators.required]
    });      
  }
  
  loadHistorico()
  {
    this.mostrarTarjeta = false;
    if (this.busquedaEquipos.valid)
    {
      this.mostrarTarjeta = true;
      const busqueda:  BuscarHistorialRequest = this.busquedaEquipos.value;
      this.partidosService.getHistorico(busqueda).subscribe({
                                                    next: response =>{ 
                                                                        this.historico = response;
                                                                        console.log(response)
                                                                      },
                                                    error: error => console.log(error)
                                                  })
    }
  }

}
