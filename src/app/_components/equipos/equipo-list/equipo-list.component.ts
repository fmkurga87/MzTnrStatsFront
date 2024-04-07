import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EquiposService } from '../../../_services/equipos.service';
import { BuscarEquiposResponse } from '../../../_models/equipos/buscar-equipos-response';
import { Equipos } from '../../../_models/equipos/equipos';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrl: './equipo-list.component.css'
})
export class EquipoListComponent implements OnInit{
   equipos : Equipos[] = [];
 
  //constructor(private http: HttpClient, private equiposService: EquiposService) {}
  constructor(private equiposService: EquiposService) {}
  
  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos()
  {
    this.equiposService.getEquipos().subscribe({
                                                  next: response =>{ 
                                                                      this.equipos = response.elementos,
                                                                      console.log(this.equipos)
                                                                    },
                                                  error: error => console.log(error)
                                                })
  }
}
