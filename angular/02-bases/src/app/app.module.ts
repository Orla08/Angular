import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DbzModule } from './dbz/dbz.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //Aqui van los componentes
    AppComponent,
  ],
  imports: [ //Aqui van las importaciones de modulos y librerias
    BrowserModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
