import { Component, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './modelos/produc.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMiduDev';
  cambio = false;
  http = inject(HttpClient); //Este inject intenta decir que instanciará la clase dentro de, ej:
  //Dentro de http se instanciara la clase HttpClient
  product: Product[] = [];


  cambiarTexto(){
    this.cambio= !this.cambio;
    if(this.cambio){
      this.title = 'Este es el nuevo titulo bebe'
    }else{
      this.title = 'angularMiduDev'
    }
  }

  ngOnInit() { //Este es el tipico useEffect de react que intenta decir que apenas de llame este componente se ejecute esta vaina de one
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products'). //Como sabemos que es lo que vamos a traer entonces podemos tipar en este caso va a ser de tipo Produc como esta tipado la data no debe recibir any de lo contrario si
    subscribe((data)=>{ //suscribe lleva como parametro una funcion esa funcion recibe la data que se obtiene a través de la peticion
      //La data es la informacion que nos devuelve ese inpoint
      this.product = data;
    })
  }


}
