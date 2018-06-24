(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {padding: 0px; margin-bottom: 3px; margin-top: 10px}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n  Abrir chamado NSI!\n  </h1>\n  <img width=\"300\" alt=\"UNA NSI\" src=\"assets/img/logo_una_fundo_branco.jpg\">\n</div>\n\n<div class=\"content\" style=\"padding:10px; margin-top:25%;\" *ngIf=\"chamadoAberto\">\n  <div class=\"alert alert-success\" role=\"alert\" style=\"text-align:center;\">\n    Seu chamado foi aberto com sucesso. Aguarde até um momento que o apoio já está a caminho.\n  </div>\n</div>\n\n<div class=\"content\" style=\"padding:10px;\" *ngIf=\"!chamadoAberto\">\n\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"msgErro\">\n      {{msgErro}}\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p>Por favor, insira o seu CPF (apenas números): </p>\n        <input myNumberOnly name=\"inputCPF\" placeholder=\"CPF\" maxlength=\"11\"\n          [(ngModel)]=\"cpfSolicitante\" (ngModelChange)=\"buscarSolicitante()\" >\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"solicitante\">\n      <div class=\"col-lg-12\">\n        <p>Qual o prédio que você está? </p>\n\n        <select [(ngModel)]=\"agrupamentoSelecionado\" (ngModelChange)=\"montarComboAndares($event)\"\n             class=\"custom-select\" id=\"comboAgrupamento\">\n           <option value=\"\" >Selecione ...</option>\n           <option *ngFor=\"let agrup of agrupamentos\" [value]=\"agrup._id\">{{agrup.nome}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"agrupamentoSelecionado\">\n      <div class=\"col-lg-12\">\n        <p>Qual o andar? </p>\n\n        <select [(ngModel)]=\"andarSelecionado\" (ngModelChange)=\"montarComboUnidades($event)\"\n            class=\"custom-select\" id=\"comboAndares\">\n           <option value=\"\" >Selecione ...</option>\n           <option *ngFor=\"let andar of andares\" [value]=\"andar\">Andar {{andar}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"andarSelecionado\">\n      <div class=\"col-lg-12\">\n        <p>Qual o sala? </p>\n\n        <select [(ngModel)]=\"unidadeSelecionada\"\n            class=\"custom-select\" id=\"comboUnidade\">\n           <option value=\"\" >Selecione ...</option>\n           <option *ngFor=\"let unidade of unidades\" [value]=\"unidade._id\">{{unidade.nome}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"unidadeSelecionada\">\n      <div class=\"col-lg-12\">\n        <p>Qual o motivo de sua solicitação? </p>\n\n        <select [(ngModel)]=\"categoriaSelecionada\"\n            class=\"custom-select\" id=\"comboCategoria\">\n           <option value=\"\" >Selecione ...</option>\n           <option *ngFor=\"let categoria of categorias\" [value]=\"categoria._id\">{{categoria.nome}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"categoriaSelecionada\">\n      <div class=\"col-lg-12\" style=\"padding:10px; text-align:center;\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"abrirChamado()\" >Abrir chamado</button>\n      </div>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_agrupamento_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/agrupamento.service */ "./src/app/services/agrupamento.service.ts");
/* harmony import */ var _services_unidade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/unidade.service */ "./src/app/services/unidade.service.ts");
/* harmony import */ var _services_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/categoria.service */ "./src/app/services/categoria.service.ts");
/* harmony import */ var _services_solicitante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/solicitante.service */ "./src/app/services/solicitante.service.ts");
/* harmony import */ var _entidades_agrupamento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entidades/agrupamento */ "./src/app/entidades/agrupamento.ts");
/* harmony import */ var _entidades_unidade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entidades/unidade */ "./src/app/entidades/unidade.ts");
/* harmony import */ var _entidades_categoria_atendimento__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entidades/categoria-atendimento */ "./src/app/entidades/categoria-atendimento.ts");
/* harmony import */ var _entidades_chamado__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entidades/chamado */ "./src/app/entidades/chamado.ts");
/* harmony import */ var _entidades_solicitante_autorizado__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entidades/solicitante-autorizado */ "./src/app/entidades/solicitante-autorizado.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = /** @class */ (function () {
    function AppComponent(agrupamentoService, unidadeService, categoriaService, solicitanteService) {
        var _this = this;
        this.agrupamentoService = agrupamentoService;
        this.unidadeService = unidadeService;
        this.categoriaService = categoriaService;
        this.solicitanteService = solicitanteService;
        this.dono = 'una';
        this.msgErro = '';
        this.chamadoAberto = false;
        this.agrupamentos = [];
        this.unidades = [];
        this.categorias = [];
        // serviços
        this.servicoAgrupamento = agrupamentoService;
        this.servicoUnidade = unidadeService;
        this.servicoCategoria = categoriaService;
        this.servicoSolicitante = solicitanteService;
        // recupera os agrupamentos
        this.servicoAgrupamento.listarAgrupamento(this.dono)
            .subscribe(function (data) {
            _this.agrupamentos = [];
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.agrupamentos.push(new _entidades_agrupamento__WEBPACK_IMPORTED_MODULE_5__["Agrupamento"](data[i]._id, data[i].dono, data[i].idEmpresa, data[i].nome, data[i].nomeEmpresa, data[i].qtdAndares));
                }
            }
        });
        // recupera as categorias
        this.servicoCategoria.listarCategorias(this.dono).subscribe(function (data) {
            _this.categorias = [];
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.categorias.push(new _entidades_categoria_atendimento__WEBPACK_IMPORTED_MODULE_7__["CategoriaAtendimento"](data[i]._id, data[i].dono, data[i].codigo, data[i].nome));
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.buscarSolicitante = function () {
        var _this = this;
        if (this.cpfSolicitante.length == 11) {
            this.servicoSolicitante.recuperarSolicitante(this.cpfSolicitante)
                .subscribe(function (data) {
                console.log('solicitante: ', data);
                if (data && data.length > 0) {
                    _this.solicitante = new _entidades_solicitante_autorizado__WEBPACK_IMPORTED_MODULE_9__["SolicitanteAutorizado"](data[0]._id, data[0].dono, data[0].celular, data[0].cpf, data[0].nome, data[0].email);
                    _this.msgErro = '';
                }
                else {
                    _this.msgErro = "Você não está autorizado a abrir chamado para NSI.";
                }
            });
        }
    };
    ;
    AppComponent.prototype.montarComboAndares = function (idAgrup) {
        var a = this.recuperarAgrupamento(this.agrupamentoSelecionado);
        //console.log('   -- -- --   ',a);
        this.andares = [];
        for (var i = 1; i <= a.qtdAndares; i++) {
            this.andares.push('' + i);
        }
    };
    AppComponent.prototype.recuperarAgrupamento = function (idAgrupamento) {
        for (var i = 0; i < this.agrupamentos.length; i++) {
            var a = this.agrupamentos[i];
            if (a._id == this.agrupamentoSelecionado) {
                return a;
            }
        }
    };
    AppComponent.prototype.montarComboUnidades = function (andar) {
        var _this = this;
        this.servicoUnidade.listarUnidades(this.dono, this.agrupamentoSelecionado, this.andarSelecionado)
            .subscribe(function (data) {
            //console.log('Unidades: ', data);
            _this.unidades = [];
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    //console.log(data[i]);
                    _this.unidades.push(new _entidades_unidade__WEBPACK_IMPORTED_MODULE_6__["Unidade"](data[i]._id, data[i].dono, data[i].codigo, data[i].idAgrupamento, data[i].nome, data[i].andar));
                }
            }
        });
    };
    AppComponent.prototype.recuperarCategoria = function (idCategoria) {
        for (var i = 0; i < this.categorias.length; i++) {
            var a = this.categorias[i];
            if (a._id == this.categoriaSelecionada) {
                //  console.log('vai selecionar esse agrupamento: ',a);
                return a;
            }
        }
        ;
    };
    AppComponent.prototype.recuperarUnidade = function (idUnidade) {
        for (var i = 0; i < this.unidades.length; i++) {
            var a = this.unidades[i];
            if (a._id == this.unidadeSelecionada) {
                //  console.log('vai selecionar esse agrupamento: ',a);
                return a;
            }
        }
        ;
    };
    AppComponent.prototype.abrirChamado = function () {
        var agrup = this.recuperarAgrupamento(this.agrupamentoSelecionado);
        var categ = this.recuperarCategoria(this.categoriaSelecionada);
        var unid = this.recuperarUnidade(this.unidadeSelecionada);
        var chamado = new _entidades_chamado__WEBPACK_IMPORTED_MODULE_8__["Chamado"]();
        chamado.dono = this.dono;
        chamado.cpfSolicitante = '014';
        chamado.idCategoria = this.categoriaSelecionada;
        chamado.nomeCategoria = categ.nome;
        chamado.idUnidade = this.unidadeSelecionada;
        chamado.nomeUnidade = unid.nome;
        chamado.nomeAgrupamento = agrup.nome;
        console.log('CHAMADO: ', chamado);
        this.chamadoAberto = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_agrupamento_service__WEBPACK_IMPORTED_MODULE_1__["AgrupamentoService"],
            _services_unidade_service__WEBPACK_IMPORTED_MODULE_2__["UnidadeService"],
            _services_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"],
            _services_solicitante_service__WEBPACK_IMPORTED_MODULE_4__["SolicitanteService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_agrupamento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/agrupamento.service */ "./src/app/services/agrupamento.service.ts");
/* harmony import */ var _services_categoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/categoria.service */ "./src/app/services/categoria.service.ts");
/* harmony import */ var _services_chamado_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/chamado.service */ "./src/app/services/chamado.service.ts");
/* harmony import */ var _services_solicitante_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/solicitante.service */ "./src/app/services/solicitante.service.ts");
/* harmony import */ var _services_unidade_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/unidade.service */ "./src/app/services/unidade.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//services





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_services_agrupamento_service__WEBPACK_IMPORTED_MODULE_5__["AgrupamentoService"], _services_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaService"], _services_chamado_service__WEBPACK_IMPORTED_MODULE_7__["ChamadoService"], _services_solicitante_service__WEBPACK_IMPORTED_MODULE_8__["SolicitanteService"], _services_unidade_service__WEBPACK_IMPORTED_MODULE_9__["UnidadeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/entidades/agrupamento.ts":
/*!******************************************!*\
  !*** ./src/app/entidades/agrupamento.ts ***!
  \******************************************/
/*! exports provided: Agrupamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agrupamento", function() { return Agrupamento; });
var Agrupamento = /** @class */ (function () {
    function Agrupamento(id, dono, idEmpresa, nome, nomeEmpresa, qtdAndares) {
        this._id = id;
        this.dono = dono;
        this.idEmpresa = idEmpresa;
        this.nome = nome;
        this.nomeEmpresa = nomeEmpresa;
        this.qtdAndares = qtdAndares;
    }
    return Agrupamento;
}());



/***/ }),

/***/ "./src/app/entidades/categoria-atendimento.ts":
/*!****************************************************!*\
  !*** ./src/app/entidades/categoria-atendimento.ts ***!
  \****************************************************/
/*! exports provided: CategoriaAtendimento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaAtendimento", function() { return CategoriaAtendimento; });
var CategoriaAtendimento = /** @class */ (function () {
    function CategoriaAtendimento(id, dono, codigo, nome) {
        this._id = id;
        this.dono = dono;
        this.codigo = codigo;
        this.nome = nome;
    }
    return CategoriaAtendimento;
}());



/***/ }),

/***/ "./src/app/entidades/chamado.ts":
/*!**************************************!*\
  !*** ./src/app/entidades/chamado.ts ***!
  \**************************************/
/*! exports provided: Chamado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chamado", function() { return Chamado; });
var Chamado = /** @class */ (function () {
    function Chamado() {
    }
    return Chamado;
}());



/***/ }),

/***/ "./src/app/entidades/solicitante-autorizado.ts":
/*!*****************************************************!*\
  !*** ./src/app/entidades/solicitante-autorizado.ts ***!
  \*****************************************************/
/*! exports provided: SolicitanteAutorizado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitanteAutorizado", function() { return SolicitanteAutorizado; });
var SolicitanteAutorizado = /** @class */ (function () {
    function SolicitanteAutorizado(id, dono, celular, cpf, nome, email) {
        this._id = id;
        this.dono = dono;
        this.celular = celular;
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
    }
    return SolicitanteAutorizado;
}());



/***/ }),

/***/ "./src/app/entidades/unidade.ts":
/*!**************************************!*\
  !*** ./src/app/entidades/unidade.ts ***!
  \**************************************/
/*! exports provided: Unidade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unidade", function() { return Unidade; });
var Unidade = /** @class */ (function () {
    function Unidade(id, dono, codigo, idAgrupamento, nome, andar) {
        this._id = id;
        this.dono = dono;
        this.codigo = codigo;
        this.idAgrupamento = idAgrupamento;
        this.nome = nome;
        this.andar = andar;
    }
    return Unidade;
}());



/***/ }),

/***/ "./src/app/services/agrupamento.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/agrupamento.service.ts ***!
  \*************************************************/
/*! exports provided: AgrupamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgrupamentoService", function() { return AgrupamentoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgrupamentoService = /** @class */ (function () {
    function AgrupamentoService(http) {
        this.http = http;
        this.apiURL = 'http://52.13.195.71:3000/api/agrupamento/v1/';
    }
    AgrupamentoService.prototype.listarAgrupamento = function (dono) {
        return this.http.get(this.apiURL + '?dono=' + dono);
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
    };
    AgrupamentoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AgrupamentoService);
    return AgrupamentoService;
}());



/***/ }),

/***/ "./src/app/services/categoria.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/categoria.service.ts ***!
  \***********************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriaService = /** @class */ (function () {
    function CategoriaService(http) {
        this.http = http;
        this.apiURL = 'http://52.13.195.71:3000/api/categoria/v1/';
    }
    CategoriaService.prototype.listarCategorias = function (dono) {
        return this.http.get(this.apiURL + '?dono=' + dono);
    };
    CategoriaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "./src/app/services/chamado.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/chamado.service.ts ***!
  \*********************************************/
/*! exports provided: ChamadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoService", function() { return ChamadoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChamadoService = /** @class */ (function () {
    function ChamadoService(http) {
        this.http = http;
        this.apiURL = 'http://52.13.195.71:3000/api/chamado/v1/';
    }
    ChamadoService.prototype.criarChamado = function (chamado) {
        return this.http.post(this.apiURL, chamado).subscribe(function (res) { return console.log(res); });
        ;
    };
    ChamadoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChamadoService);
    return ChamadoService;
}());



/***/ }),

/***/ "./src/app/services/solicitante.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/solicitante.service.ts ***!
  \*************************************************/
/*! exports provided: SolicitanteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitanteService", function() { return SolicitanteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolicitanteService = /** @class */ (function () {
    function SolicitanteService(http) {
        this.http = http;
        this.apiURLLogin = 'http://52.13.195.71:3000/api/login/v1/autorizado/';
        this.apiURL = 'http://52.13.195.71:3000/api/autorizado/v1/';
    }
    SolicitanteService.prototype.autenticar = function (cpfParamento) {
        return this.http.post(this.apiURLLogin, { cpf: cpfParamento }).subscribe(function (res) { return console.log(res); });
    };
    SolicitanteService.prototype.recuperarSolicitante = function (cpf) {
        return this.http.get(this.apiURL + '?cpf=' + cpf);
    };
    SolicitanteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SolicitanteService);
    return SolicitanteService;
}());



/***/ }),

/***/ "./src/app/services/unidade.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/unidade.service.ts ***!
  \*********************************************/
/*! exports provided: UnidadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeService", function() { return UnidadeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnidadeService = /** @class */ (function () {
    function UnidadeService(http) {
        this.http = http;
        this.apiURL = 'http://52.13.195.71:3000/api/unidade/v1/';
    }
    UnidadeService.prototype.listarUnidades = function (dono, idAgrupamento, andar) {
        return this.http.get(this.apiURL + '?dono=' + dono + '&idAgrupamento=' + idAgrupamento + '&andar=' + andar);
    };
    UnidadeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UnidadeService);
    return UnidadeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fabio/dev/projetos/angularjs/chamado-abertura/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map