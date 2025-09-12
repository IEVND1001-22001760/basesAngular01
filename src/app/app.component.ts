import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Irene Padilla';

    duplicarNumero(valor:number):number{
    return valor*2;
  }

  pelicula={
    titulo:"Una pelicula de huevos",
    anio:2010,
    genero:"Comedia"
  }
}
//


