import { cliente } from "./cliente.js";

export class Compañia extends cliente{
  constructor(nombre, saldo,tipo,clase)  {
    super(nombre, saldo,tipo)
    this.clase = clase
    }
  }
