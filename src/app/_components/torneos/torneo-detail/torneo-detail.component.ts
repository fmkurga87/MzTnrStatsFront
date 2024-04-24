import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorneosService } from '../../../_services/torneos.service';
import { torneo } from '../../../_models/torneos/torneo';
import { ObtenerTorneoResponse } from '../../../_models/torneos/obtenerTorneoResponse';

@Component({
  selector: 'app-torneo-detail',
  templateUrl: './torneo-detail.component.html',
  styleUrl: './torneo-detail.component.css'
})
export class TorneoDetailComponent implements OnInit{

  torneo : ObtenerTorneoResponse | undefined;

  constructor(private torneosService: TorneosService, private route: ActivatedRoute) {  }
  
  ngOnInit(): void {
    this.loadTorneo();
  }

  loadTorneo()
  {
    const torneo =  this.route.snapshot.paramMap.get('idTorneo');
    console.log(torneo)
    if (!torneo) return;
    this.torneosService.getTorneo(Number(torneo)).subscribe({
                                                  next: response =>{ 
                                                                      this.torneo = response, 
                                                                      console.log(this.torneo)
                                                                    },
                                                  error: error => console.log(error)
                                                })
  }

}
