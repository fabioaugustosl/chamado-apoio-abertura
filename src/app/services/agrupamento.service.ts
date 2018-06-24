import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Agrupamento } from '../entidades/agrupamento';

@Injectable({
  providedIn: 'root'
})
export class AgrupamentoService {

  private apiURL = 'http://52.13.195.71:3000/api/agrupamento/v1/';

  constructor(private http: HttpClient) { }



  listarAgrupamento(dono: string){


      return this.http.get<Agrupamento[]>(this.apiURL+'?dono='+dono);

      /*.subscribe(
        data => {
          let resp : Agrupamento[] = [];
          if(data){
            for (let a in data) {
                console.log(a);
                //resp.push(new Agrupamento(a._id, a.dono, a.idEmpresa, a.nome, a.nomeEmpresa, a.qtdAndares));
            }
          }
          return resp;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        }
      );*/
  }


}
