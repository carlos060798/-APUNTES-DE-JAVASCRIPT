import { datosCita,NuevaCita } from "../funciones/funciones.js"; 
import {inputnombre, inputpropietario, inputtelefono,inputfecha,inputhora,inputsintomas,formulario} from "../selectores/selectores.js";


export default class initapp{
  constructor (){
  this.appinit()
  }
  appinit(){
  inputnombre.addEventListener("input", datosCita);
  inputpropietario.addEventListener("input", datosCita);
  inputtelefono.addEventListener("input", datosCita);
  inputfecha.addEventListener("input", datosCita);
  inputhora.addEventListener("input", datosCita);
  inputsintomas.addEventListener("input", datosCita);

  //eventos formulario y boton

  formulario.addEventListener("submit", NuevaCita);
  }
}