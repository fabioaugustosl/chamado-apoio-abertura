export class Unidade {

  _id: string;
  dono: string;
	codigo: string;
	idAgrupamento: string;
	nome: string;
	andar: number;

  constructor(id: string, dono : string,
            codigo : string, idAgrupamento : string,
          nome : string, andar : number) {
    this._id = id;
    this.dono = dono;
    this.codigo = codigo;
    this.idAgrupamento = idAgrupamento;
    this.nome = nome;
    this.andar = andar;
  }

}
