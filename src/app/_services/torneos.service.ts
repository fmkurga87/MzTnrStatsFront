import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuscarTorneosRequest } from '../_models/torneos/buscarTorneosRequest';

@Injectable({
  providedIn: 'root'
})
export class TorneosService {
  baseUrl = 'http://localhost:5117/api/';

    
  constructor(private http: HttpClient) { }

  getTorneosMock(model: any) {
    return this.http.get(this.baseUrl + 'Torneos/Mock/10');
  }

  getTorneos(buscarTorneosRequest: BuscarTorneosRequest) {
    const httpOptions = {
      params: new HttpParams()
      .set('IdMz', buscarTorneosRequest.idMz)
      .set('Nombre', buscarTorneosRequest.nombre)
      .set('Edicion', buscarTorneosRequest.edicion)
      .set('TemporadaMZ', buscarTorneosRequest.temporadaMZ)
      .set('IdEquipo', buscarTorneosRequest.idEquipo)
      .set('Fecha', buscarTorneosRequest.fecha),
    }
    
    return this.http.get(this.baseUrl + 'Torneos/Mock/10');
  }

  // getTurns(turnForGetDto: turnForGetDto){
    
  //   const httpOptions = {
  //     params: new HttpParams()
  //     .set('Dia', turnForGetDto.dia)
  //     .set('MedicoId', turnForGetDto.MedicoId)
  //     .set('CentroDeSaludId', turnForGetDto.CentroDeSaludId),
  //   }
          
  //   return this.http.get<turnos>(this.baseUrl + 'Turnos/Dia', httpOptions);
  // }

}
