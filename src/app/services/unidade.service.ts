import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Unidade } from '../entidades/unidade';


@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  private apiURL = 'http://52.13.195.71:3000/api/unidade/v1/';

  constructor(private http: HttpClient) { }

  listarUnidades(dono: string, idAgrupamento : string, andar : string){
      return this.http.get<Unidade[]>(this.apiURL+'?dono='+dono+'&idAgrupamento='+idAgrupamento+'&andar='+andar);
  }

}
