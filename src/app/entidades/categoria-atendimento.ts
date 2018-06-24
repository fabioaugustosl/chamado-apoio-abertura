export class CategoriaAtendimento {

  _id: string;
  dono: string;
	codigo: string;
	nome: string;

  constructor(id: string, dono : string,
            codigo : string, nome : string) {
    this._id = id;
    this.dono = dono;
    this.codigo = codigo;
    this.nome = nome;
  }


}
