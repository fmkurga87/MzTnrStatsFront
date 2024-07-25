import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BuscarEquiposResponse } from '../_models/equipos/buscar-equipos-response';
import { EquipoCompleto } from '../_models/equipos/equipoCompleto';
import { Observable } from 'rxjs';
import { ObtenerEquipoResponse } from '../_models/equipos/obtener-equipo-response';
import { CrearEquipoRequest } from '../_models/equipos/crear-equipo-request';

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
      .set('CantidadPagina', 50)
      .set('EntidadOrdenamiento', 1),
    }
    
    return this.http.get<BuscarEquiposResponse>(this.baseUrl + 'Equipos', httpOptions);
  }
  
  getEquipo(id: number): Observable<ObtenerEquipoResponse> {
    return this.http.get<ObtenerEquipoResponse>(this.baseUrl + 'Equipos/' + id);
  }

  postEquipo(nuevoEquipo: CrearEquipoRequest) {
    return this.http.post<number>(this.baseUrl + 'Equipos', nuevoEquipo);
  }
}
