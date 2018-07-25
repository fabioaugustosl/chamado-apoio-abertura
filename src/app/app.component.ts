import { Component } from '@angular/core';
import { Observable, Subject,Subscription, pipe } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { AgrupamentoService } from './services/agrupamento.service';
import { UnidadeService } from './services/unidade.service';
import { CategoriaService } from './services/categoria.service';
import { SolicitanteService } from './services/solicitante.service';
import { ChamadoService } from './services/chamado.service';

import { Agrupamento } from './entidades/agrupamento';
import { Unidade } from './entidades/unidade';
import { CategoriaAtendimento } from './entidades/categoria-atendimento';
import { Chamado } from './entidades/chamado';
import { SolicitanteAutorizado } from './entidades/solicitante-autorizado';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dono = 'una';
  msgErro = '';
  chamadoAberto = false;

  private agrupamentos:Agrupamento[]=[];
  agrupamentoSelecionado: string;

  private andares:string[];
  andarSelecionado: string;

  private unidades:Unidade[]=[];
  unidadeSelecionada: string;

  categorias:CategoriaAtendimento[]=[];
  categoriaSelecionada: string;

  cpfSolicitante: string;
  solicitante: SolicitanteAutorizado;


  constructor(private servicoAgrupamento: AgrupamentoService
              , private servicoUnidade: UnidadeService
              , private servicoCategoria : CategoriaService
              , private servicoSolicitante : SolicitanteService
              , private servicoChamado : ChamadoService
              ) {

     // recupera os agrupamentos
     this.servicoAgrupamento.listarAgrupamento(this.dono)
      .subscribe((data) => {
          this.agrupamentos = [];
          if(data){
            for (let i=0; i < data.length; i++) {
              this.agrupamentos.push(new Agrupamento(data[i]._id, data[i].dono, data[i].idEmpresa, data[i].nome, data[i].nomeEmpresa, data[i].qtdAndares));
            }
          }
     });

     // recupera as categorias
    this.servicoCategoria.listarCategorias(this.dono).subscribe((data) => {
       this.categorias =[];
       if(data){
          for (let i=0; i <data.length; i++) {
            this.categorias.push(new CategoriaAtendimento(data[i]._id, data[i].dono, data[i].codigo, data[i].nome));
          }
       }
     });
  }


  ngOnInit() {
    this.msgErro = '';
    this.chamadoAberto = false;
  }


  buscarSolicitante(){
    this.msgErro = '';
    this.chamadoAberto = false;

    if(this.cpfSolicitante.length == 11){
      this.servicoSolicitante.recuperarSolicitante(this.cpfSolicitante)
        .subscribe((data) => {
          console.log('solicitante: ', data);
          if(data && data.length > 0){
            this.solicitante = new SolicitanteAutorizado(data[0]._id, data[0].dono,
                                                      data[0].celular, data[0].cpf,
                                                    data[0].nome, data[0].email )
            this.msgErro = '';
          } else {
            this.msgErro = "Você não está autorizado a abrir chamado para NSI.";
          }
      });
    }

  };


  montarComboAndares(idAgrup){
    let a = this.recuperarAgrupamento(this.agrupamentoSelecionado);
    //console.log('   -- -- --   ',a);
    this.andares = [];
    for (var i = 1; i <= a.qtdAndares; i++) {
      this.andares.push(''+i);
    }
  }

   recuperarAgrupamento(idAgrupamento){
    for (var i = 0; i < this.agrupamentos.length; i++) {
      let a = this.agrupamentos[i];
      if(a._id == this.agrupamentoSelecionado){
        return a;
      }
    }
  }


  montarComboUnidades(andar){

    this.servicoUnidade.listarUnidades(this.dono, this.agrupamentoSelecionado, this.andarSelecionado)
      .subscribe((data) => {
        //console.log('Unidades: ', data);
         this.unidades =[];
         if(data){
            for (let i=0; i <data.length; i++) {
              //console.log(data[i]);
              this.unidades.push(new Unidade(data[i]._id, data[i].dono, data[i].codigo, data[i].idAgrupamento
                            , data[i].nome, data[i].andar));
            }
         }
    });
  }


  private recuperarCategoria(idCategoria){
    for (var i = 0; i < this.categorias.length; i++) {
      let a = this.categorias[i];
      if(a._id == this.categoriaSelecionada){
      //  console.log('vai selecionar esse agrupamento: ',a);
        return a;
      }
    };
  }

  private recuperarUnidade(idUnidade){
    for (var i = 0; i < this.unidades.length; i++) {
      let a = this.unidades[i];
      if(a._id == this.unidadeSelecionada){
      //  console.log('vai selecionar esse agrupamento: ',a);
        return a;
      }
    };
  }


  abrirChamado(){

    let agrup = this.recuperarAgrupamento(this.agrupamentoSelecionado);
    let categ = this.recuperarCategoria(this.categoriaSelecionada);
    let unid = this.recuperarUnidade(this.unidadeSelecionada);

    let chamado = new Chamado();
    chamado.dono = this.dono;
    chamado.cpfSolicitante = this.cpfSolicitante;
    chamado.idCategoria = this.categoriaSelecionada;
    chamado.nomeCategoria = categ.nome;
    chamado.idUnidade = this.unidadeSelecionada;
    chamado.nomeUnidade = unid.nome;
    chamado.nomeAgrupamento = agrup.nome ;

    console.log('CHAMADO: ', chamado);
    //this.chamadoAberto = true;

    this.servicoChamado.criarChamado(chamado).subscribe(
      (data) => {
        this.chamadoAberto = true;
      }
      ,(error) => { console.log(error); this.msgErro = error.error; }
    );
  }


}
