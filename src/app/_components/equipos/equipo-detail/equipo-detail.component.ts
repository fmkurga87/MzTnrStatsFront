import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../../_services/equipos.service';
import { ActivatedRoute } from '@angular/router';
import { EquipoCompleto } from '../../../_models/equipos/equipoCompleto';
import { TorneosResponse } from '../../../_models/torneos/torneosResponse';
import { TorneosService } from '../../../_services/torneos.service';

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrl: './equipo-detail.component.css'
})
export class EquipoDetailComponent implements OnInit {
  equipo : EquipoCompleto | undefined;
  torneos : TorneosResponse | undefined;

  constructor(private equiposService: EquiposService, private torneosService: TorneosService, private route: ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.loadEquipo();
  }

  loadEquipo()
  {
    const equipo =  this.route.snapshot.paramMap.get('idEquipo');
    if (!equipo) return;
    this.equiposService.getEquipo(Number(equipo)).subscribe({
                                                  next: response =>{ 
                                                                      this.equipo = response.equipo
                                                                    },
                                                  error: error => console.log(error)
                                                })

    this.torneosService.getTorneosEquipo(Number(equipo)).subscribe({
                                                        next: response => {
                                                          this.torneos = response,
                                                          console.log(this.torneos);
                                                        },
                                                        error: error => console.log(error)
                                                      })                                            
  }
}
