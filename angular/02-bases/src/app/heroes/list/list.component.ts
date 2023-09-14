import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  listHeroes : string[] = ['Hulk', 'Spiderman','Capitan America', 'Thor'];
  deleteHeroe? : string; //Variable string vacia por el momento

  removeLastHero():void{ //Metodo que no devuelve nada
    this.deleteHeroe = this.listHeroes.pop() //Devuelve es el elemento borrado
    console.log(this.deleteHeroe)
  }

}
