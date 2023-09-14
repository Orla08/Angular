import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";



@NgModule({
  declarations: [ //Lo que se utiliza dentro del modulo
    HeroComponent,
    ListComponent
  ],
  exports: [ //Lo que quieres exportar a cualquier otro moduli
    HeroComponent,
    ListComponent
  ],
  imports: [ //Librerias que necesitaras para utilizar ciertas directivas
  // o librerias que se manejan dentro de los componentes utilizados dentro del mismo modulo
    CommonModule
  ]
})

export class HeroesModule{}
