export class SolicitanteAutorizado {

  _id: string;
  dono: string;
	celular: string;
	cpf: string;
	nome: string;
	email: string;

  constructor(id: string, dono : string,
            celular : string, cpf : string,
          nome : string, email : string) {
    this._id = id;
    this.dono = dono;
    this.celular = celular;
    this.cpf = cpf;
    this.nome = nome;
    this.email = email;
  }

}
