import { Component } from '@angular/core';
import { Iheroes } from '../iheroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
  //styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {

imageWigth:number=40;
imageMargin:number=2;
muestraImagen:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImagen=!this.muestraImagen;
}
//vinculamos con el archivo  que creamos iheroes
heroes:Iheroes[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      description:"Kame Hame Ha",
      race:"Saiyan",
      ki:9000
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      description:"Final Flash",
      race:"Saiyan",
      ki:8500
    },
    {
      "imagen":"https://dragonball-api.com/characters/picolo_normal.webp",
       nombre:"Piccolo",
       description:"Makankosappo",
       race:"Namekiano",
       ki:7000
    },
    {
      "imagen":"https://dragonball-api.com/characters/Freezer.webp",
       nombre:"Freezer",
       description:"Death Ball",
       race:"Alien",
       ki:9500
    },
 
  ]

}
