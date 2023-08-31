import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; //Esto es para poder realizar peticiones de tipo http a apis

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducComponent } from './components/produc/produc.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
