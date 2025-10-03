import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  nombre:string=""; 
  personas:string=""; 
  boletos:string=""; 
  tarjeta:boolean=false; 
  final:number=0;

  descuento():void{

    if (parseInt(this.boletos) > parseInt(this.personas) * 7) {
      alert("No se permiten más de 7 boletos por persona");
      return;
    }
    
    this.final = parseInt(this.boletos) * 12;

    
    if (parseInt(this.boletos) >= 3 && parseInt(this.boletos) <= 5){
      this.final = this.final * 0.90;
    } else if (parseInt(this.boletos) >= 6){
      this.final = this.final * 0.85;
    }

    if(this.tarjeta == true){
      this.final = this.final * 0.90;
    }
  }
}
