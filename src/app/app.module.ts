import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//services
import { AgrupamentoService } from './services/agrupamento.service';
import { CategoriaService } from './services/categoria.service';
import { ChamadoService } from './services/chamado.service';
import { SolicitanteService } from './services/solicitante.service';
import { UnidadeService } from './services/unidade.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AgrupamentoService, CategoriaService, ChamadoService, SolicitanteService, UnidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
