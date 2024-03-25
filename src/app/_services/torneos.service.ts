import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuscarTorneosRequest } from '../_models/torneos/buscarTorneosRequest';
import { Torneos } from '../_models/torneos/torneos';
import { Observable } from 'rxjs';
import { ObtenerTorneoResponse } from '../_models/torneos/obtenerTorneoResponse';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TorneosService {
  baseUrl = environment.apiUrl;

    
  constructor(private http: HttpClient) { }

  getTorneosMock(model: any) {
    return this.http.get(this.baseUrl + 'Torneos/Mock/10');
  }

  getTorneos(buscarTorneosRequest: BuscarTorneosRequest) {
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
    
    return this.http.get<Torneos>(this.baseUrl + 'Torneos', httpOptions);
    // TODO: Ver eltema del modelo (en el ejemplo: turnos, agregar para torneos)
    //   return this.http.get<turnos>(this.baseUrl + 'Turnos/Dia', httpOptions);
  }

  getTorneo(id : number): Observable<ObtenerTorneoResponse> {
    return this.http.get<ObtenerTorneoResponse>(this.baseUrl + 'Torneos/' + id);
  }

}
