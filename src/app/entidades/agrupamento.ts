export class Agrupamento {

  public _id: string;
  public dono: string;
	public idEmpresa: string;
	public nome: string;
	public nomeEmpresa: string;
	public qtdAndares: number;


  constructor(id: string, dono : string,
            idEmpresa : string, nome : string, nomeEmpresa : string,  qtdAndares : number) {
    this._id = id;
    this.dono = dono;
    this.idEmpresa = idEmpresa;
    this.nome = nome;
    this.nomeEmpresa = nomeEmpresa;
    this.qtdAndares = qtdAndares;
  }


}
