import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BuscarHistorialResponse } from '../_models/partidos/buscar-historial-response';
import { BuscarHistorialRequest } from '../_models/partidos/buscar-historial-request';


@Injectable({
  providedIn: 'root'
})
export class PartidosService {
    baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHistorico(buscarHistorialRequest: BuscarHistorialRequest) {
    const httpOptions = {
      params: new HttpParams()
      //.set('IdMz', buscarTorneosRequest.idMz)
      //.set('Nombre', buscarTorneosRequest.nombre)
      //.set('Edicion', buscarTorneosRequest.edicion)
      //.set('TemporadaMZ', buscarTorneosRequest.temporadaMZ)
      //.set('IdEquipo', buscarTorneosRequest.idEquipo)
      //.set('Fecha', buscarTorneosRequest.fecha)
      .set('idEquipo1', buscarHistorialRequest.idEquipo1)
      .set('idEquipo2', buscarHistorialRequest.idEquipo2),
    }
    
    return this.http.get<BuscarHistorialResponse>(this.baseUrl + 'Partidos/Historico', httpOptions);
  }
}
