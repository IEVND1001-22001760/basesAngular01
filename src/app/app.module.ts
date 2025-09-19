import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
//el componente que se crea automaticamente cuando creamos un proyecto

//decorador| que permite hacer la declaracion de los modulos que usaremos en el proyecto
@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//aqui se declaran todos los componentes que utilizaremos
