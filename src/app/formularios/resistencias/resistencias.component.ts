import { Component } from '@angular/core';
import { colores, multiplo, tolerancia, seleccion } from './operacionesResistencias.complement';


@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {

      colors= colores;
      multi = multiplo;
      porcentaje = tolerancia;
      


      banda1:number= 0;
      banda2:number= 0;
      total:number=0;
      multiplicador:number=0;
      porcentajeT:number=0.05;
      porcentajeP:number=0; 
      totalDorado:number=0;
      totalPlateado:number=0;
      valorMax:number=0;
      valorMin=0;  
      dorado:boolean=false;
      plateado:boolean=false;
      color1:string="";
      color2:string="";
      color3:string="";
      colorP:string="";
      nom1:string="";
      nom2:string="";
      nom3:string="";
      nomP:string="";


      calcular():void{

        /* juntar la cantidad de los numeros */
        //sirve para concatener variables como texto y con Number lo canvertimos a numero
        this.total = Number(`${this.banda1}${this.banda2}`) * this.multiplicador;

        //operacion para valor maximo o minimo

        this.valorMin = this.total * (1 - this.porcentajeT);
        this.valorMax = this.total * (1 + this.porcentajeT);

        //find como su nombre lo menciona, busca el valor o en este caso el color con el valor

        this.color1 = this.colors.find(c => c.valor === this.banda1)?.clase || '';
        this.color2 = this.colors.find(c => c.valor === this.banda2)?.clase || '';
        this.color3 = this.multi.find(m => m.valor === this.multiplicador)?.clase || '';
        this.colorP = this.porcentaje.find(p => p.valor === this.porcentajeT)?.clase || '';

        this.nom1 = this.colors.find(c => c.valor === this.banda1)?.nombre || '';
        this.nom2 = this.colors.find(c => c.valor === this.banda2)?.nombre || '';
        this.nom3 = this.multi.find(m => m.valor === this.multiplicador)?.nombre || '';
        this.nomP = this.porcentaje.find(p => p.valor === this.porcentajeT)?.nombre || '';
        

        

      }
  

  
}


//TS en donde agregaremos los componentes
/* heroes:Iheroes[]=[ */
