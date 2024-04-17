import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../../_services/equipos.service';
import { ActivatedRoute } from '@angular/router';
import { EquipoCompleto } from '../../../_models/equipos/equipoCompleto';

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrl: './equipo-detail.component.css'
})
export class EquipoDetailComponent implements OnInit {
  equipo : EquipoCompleto | undefined;

  constructor(private equiposService: EquiposService, private route: ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.loadEquipo();
  }

  loadEquipo()
  {
    const equipo =  this.route.snapshot.paramMap.get('idEquipo');
    console.log(equipo);
    if (!equipo) return;
    this.equiposService.getEquipo(Number(equipo)).subscribe({
                                                  next: response =>{ 
                                                                      this.equipo = response.equipo, 
                                                                      console.log(this.equipo)
                                                                    },
                                                  error: error => console.log(error)
                                                })
  }

}
