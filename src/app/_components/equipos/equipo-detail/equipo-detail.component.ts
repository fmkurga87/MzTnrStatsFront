import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../../_services/equipos.service';
import { Router } from '@angular/router';
import { EquipoCompleto } from '../../../_models/equipos/equipoCompleto';

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrl: './equipo-detail.component.css'
})
export class EquipoDetailComponent implements OnInit {
  equipo! : EquipoCompleto;

  constructor(private equiposService: EquiposService, private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.getEquipo();
  }

  getEquipo()
  {
    this.equiposService.getEquipo(156557).subscribe({
                                                  next: response =>{ 
                                                                      this.equipo = response.equipo, 
                                                                      console.log(this.equipo)
                                                                    },
                                                  error: error => console.log(error)
                                                })
  }

}
