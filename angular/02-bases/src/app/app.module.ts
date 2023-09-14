import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/Counter.module';
import { HeroesModule } from './heroes/Heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //Aqui van los componentes
    AppComponent,
  ],
  imports: [ //Aqui van las importaciones de modulos y librerias
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
