import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  activo = true;
  activo2 = true;
  public name: string = 'ironMan';
  public age: number = 70;

  get capitalize():string { //Este getter se muestra como propiedad
    return this.name.toUpperCase();
  }

  getDescription():string { //Metodo
    return `${this.name} -- ${this.age}`
  }

  changeHero():void {
    this.activo = false;
    this.name = 'Spiderman'
  }


  changeAge():void {
    this.activo2 = false;
    this.age = 23
  }

  reset():void {
    this.activo = true;
    this.activo2 = true;
    this.name = 'ironMan'
    this.age = 70
  }

}
