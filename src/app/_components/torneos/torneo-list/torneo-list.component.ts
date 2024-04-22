import { Component, OnInit } from '@angular/core';
import { TorneosService } from '../../../_services/torneos.service';
import { TorneosResponse } from '../../../_models/torneos/torneosResponse';

@Component({
  selector: 'app-torneo-list',
  templateUrl: './torneo-list.component.html',
  styleUrl: './torneo-list.component.css'
})
export class TorneoListComponent implements OnInit {
  torneos : TorneosResponse | undefined;
  
  constructor(private torneosService: TorneosService) {
    
  }

  ngOnInit(): void {
    this.torneosService.getListaTorneos().subscribe({
      next: response =>{ 
                          this.torneos = response,
                          console.log(response)
                        },
      error: error => console.log(error),
    })

  }

}
