import { Iheroes } from './iheroes';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //decorador
  name: 'heroesFilter', //el nombre para hacer referencia el pipe
  standalone: false // manejo de modulos  
})
export class HeroesFilterPipe implements PipeTransform { //clase con implements

  transform(value: Iheroes[], args: string): Iheroes[] { //manera para mandar parametros a pipe
    let filter:string=args?args.toLocaleLowerCase():'';
    //el arreglo del tipo de esos datos
    return filter?value.filter((hero:Iheroes)=>
      hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value; //(==1) diferente de 1
    //es una funcion para poder buscar en este caso algun heroe ya sea con mayusculas o minusculas
    //hasta que encuentre -1
  }

}
