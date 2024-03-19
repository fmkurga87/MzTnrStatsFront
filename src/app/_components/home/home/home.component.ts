import { Component, OnInit } from '@angular/core';
import { BuscarTorneosRequest } from '../../../_models/torneos/buscarTorneosRequest';
import { HttpClient } from '@angular/common/http';
import { TorneosService } from '../../../_services/torneos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title = 'MzTNR Stats';
  torneos: any;

  getTorneosParms : BuscarTorneosRequest = {
    "idMz": 0,
    "nombre": "",
    "edicion": 0,
    "temporadaMZ": 0,
    "idEquipo": 0,
    "fecha": "",
  };

  constructor(private http: HttpClient, private torneosService: TorneosService) {}
  
  ngOnInit(): void {
    this.torneosService.getTorneos(this.getTorneosParms).subscribe({
      next: response =>{ 
                          this.torneos = response,
                          console.log(response)
                        },
      error: error => console.log(error),
      complete: () => console.log('Request a GET equipos completado'),
    })
  }

}
