import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Chamado } from '../entidades/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  private apiURL = 'http://52.13.195.71:3000/api/chamado/v1/';

  constructor(private http: HttpClient) { }

  criarChamado(chamado: Chamado){
      return this.http.post(this.apiURL, chamado).subscribe(res => console.log(res));;
  }
}
