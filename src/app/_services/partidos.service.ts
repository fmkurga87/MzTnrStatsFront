import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BuscarHistorialResponse } from '../_models/partidos/buscar-historial-response';


@Injectable({
  providedIn: 'root'
})
export class PartidosService {
    baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHistorico(){
    const httpOptions = {
      params: new HttpParams()
      //.set('IdMz', buscarTorneosRequest.idMz)
      //.set('Nombre', buscarTorneosRequest.nombre)
      //.set('Edicion', buscarTorneosRequest.edicion)
      //.set('TemporadaMZ', buscarTorneosRequest.temporadaMZ)
      //.set('IdEquipo', buscarTorneosRequest.idEquipo)
      //.set('Fecha', buscarTorneosRequest.fecha)
      .set('idEquipo1', 156557)
      .set('idEquipo2', 993062),
    }
    
    return this.http.get<BuscarHistorialResponse>(this.baseUrl + 'Partidos/Historico', httpOptions);
  }
}
