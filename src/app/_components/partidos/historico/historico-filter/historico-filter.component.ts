import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../../../../_services/partidos.service';
import { BuscarHistorialResponse } from '../../../../_models/partidos/buscar-historial-response';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscarHistorialRequest } from '../../../../_models/partidos/buscar-historial-request';
import { Equipos } from '../../../../_models/equipos/equipos';
import { EquiposService } from '../../../../_services/equipos.service';

@Component({
  selector: 'app-historico-filter',
  templateUrl: './historico-filter.component.html',
  styleUrl: './historico-filter.component.css'
})
export class HistoricoFilterComponent implements OnInit{
  //busquedaEquipos!: FormGroup;
  historico!: BuscarHistorialResponse;
  mostrarTarjeta = false;

  busquedaEquipo1!: FormGroup;
  equipos1: Equipos[] = [];
  filteredEquipo1: Equipos[] = [];
  selectedEquipo1Id: number | null = null;

  busquedaEquipo2!: FormGroup;
  equipos2: Equipos[] = [];
  filteredEquipo2: Equipos[] = [];
  selectedEquipo2Id: number | null = null;

  constructor(private fb: FormBuilder, private partidosService : PartidosService, private equiposService: EquiposService) 
  {  
    
  }
  
  ngOnInit(): void {

    this.busquedaEquipo1 = this.fb.group({
      nombreEquipo1: ['']
    });

    this.busquedaEquipo2 = this.fb.group({
      nombreEquipo2: ['']
    });

    this.equiposService.getEquipos().subscribe(buscarEquiposResponse => {
      this.equipos1 = buscarEquiposResponse.elementos;
      this.equipos2 = buscarEquiposResponse.elementos;
    });

    this.busquedaEquipo1.get('nombreEquipo1')?.valueChanges.subscribe(value => {
      this.filteredEquipo1 = this.equipos1.filter(equipo => equipo.nombreEquipo.toLowerCase().includes(value.toLowerCase()));
    });

    this.busquedaEquipo2.get('nombreEquipo2')?.valueChanges.subscribe(value => {
      this.filteredEquipo2 = this.equipos2.filter(equipo => equipo.nombreEquipo.toLowerCase().includes(value.toLowerCase()));
    });    
  }
  
  onSelectEquipo1(equipo: Equipos): void {
    this.selectedEquipo1Id = equipo.idMz;
    this.busquedaEquipo1.get('nombreEquipo1')?.setValue(equipo.nombreEquipo);
    this.filteredEquipo1 = [];
  }

  onSelectEquipo2(equipo: Equipos): void {
    this.selectedEquipo2Id = equipo.idMz;
    this.busquedaEquipo2.get('nombreEquipo2')?.setValue(equipo.nombreEquipo);
    this.filteredEquipo2 = [];
  }

  loadHistorico()
  {
    this.mostrarTarjeta = false;
    if (this.selectedEquipo1Id != 0 && this.selectedEquipo2Id != 0)
    {
      //this.mostrarTarjeta = true;
      console.log(this.selectedEquipo1Id);
      console.log(this.selectedEquipo2Id);

      const busqueda:  BuscarHistorialRequest = {idEquipo1: this.selectedEquipo1Id ?? 0, idEquipo2: this.selectedEquipo2Id ?? 0};
      this.partidosService.getHistorico(busqueda).subscribe({
                                                    next: response =>{ 
                                                                        this.historico = response;
                                                                        if (response.totalPartidos >= 0)
                                                                        {
                                                                          this.mostrarTarjeta = true;
                                                                        }
                                                                      },
                                                    error: error => console.log(error)
                                                  })
                                                

      
    }
  }
}
