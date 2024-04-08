import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BuscarEquiposResponse } from '../_models/equipos/buscar-equipos-response';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEquipos(){
    const httpOptions = {
      params: new HttpParams()
      //.set('IdMz', buscarTorneosRequest.idMz)
      //.set('Nombre', buscarTorneosRequest.nombre)
      //.set('Edicion', buscarTorneosRequest.edicion)
      //.set('TemporadaMZ', buscarTorneosRequest.temporadaMZ)
      //.set('IdEquipo', buscarTorneosRequest.idEquipo)
      //.set('Fecha', buscarTorneosRequest.fecha)
      .set('EntidadOrdenamiento', 1),
    }
    
    return this.http.get<BuscarEquiposResponse>(this.baseUrl + 'Equipos', httpOptions);
  }

  getEquipo(){
    
  }
}
