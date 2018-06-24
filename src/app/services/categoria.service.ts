import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CategoriaAtendimento } from '../entidades/categoria-atendimento';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiURL = 'http://52.13.195.71:3000/api/categoria/v1/';

  constructor(private http: HttpClient) { }

  listarCategorias(dono: string){
      return this.http.get<CategoriaAtendimento[]>(this.apiURL+'?dono='+dono);
  }
}
