import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TorneosService {
  baseUrl = 'http://localhost:5117/api/';

  constructor(private http: HttpClient) { }

  getTorneos(model: any) {
    return this.http.get(this.baseUrl + 'Mock/10');
    //return this.http.get(this.baseUrl + 'Mock/10', model)
  }
}
