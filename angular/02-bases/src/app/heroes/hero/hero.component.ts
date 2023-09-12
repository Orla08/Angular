import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  public name: string = 'ironMan';
  public age: number = 70;

  get capitalize():string { //Este getter se muestra como propiedad
    return this.name.toUpperCase();
  }

  getDescription():string { //Metodo
    return `${this.name} -- ${this.age}`
  }

}
