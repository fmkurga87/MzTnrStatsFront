import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TorneosService } from './_services/torneos.service';
import { BuscarTorneosRequest } from './_models/torneos/buscarTorneosRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MzTNR Stats';
  torneos: any;
  torneos2: any;

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
                          this.torneos2 = response,
                          console.log(response)
                        },
      error: error => console.log(error),
      complete: () => console.log('Request a GET equipos completado'),
    })
  }

  
}
