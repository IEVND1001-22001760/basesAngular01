import { Component } from '@angular/core';
import { distancia } from './operacionL.component';

@Component({
  selector: 'app-operacion',
  standalone: false,
  templateUrl: './operacion.component.html',
  styleUrl: './operacion.component.css'
})
export class OperacionComponent {

  //DOCUMENTO OPERACIONES

  puntos = new distancia;
  total:number=0;

  distanciaF(){

    //this.cal.resultado = this.total;
    this.puntos.calculo();
    this.total = this.puntos.resultado;
  }


}
