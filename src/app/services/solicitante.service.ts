import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { SolicitanteAutorizado } from '../entidades/solicitante-autorizado';


@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {

  private apiURLLogin = 'http://52.13.195.71:3000/api/login/v1/autorizado/';
  private apiURL = 'http://52.13.195.71:3000/api/autorizado/v1/';


  constructor(private http: HttpClient) { }

  autenticar(cpfParamento: string){
      return this.http.post(this.apiURLLogin, {cpf : cpfParamento}).subscribe(res => console.log(res));
  }


  recuperarSolicitante(cpf: string){
      return this.http.get<SolicitanteAutorizado[]>(this.apiURL+'?cpf='+cpf);
  }

}
