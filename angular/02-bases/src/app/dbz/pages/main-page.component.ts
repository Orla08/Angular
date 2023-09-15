import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public characters: Character[] = [
    {
      name:'Krilin',
    power: 1000
    },
    {
      name:'Goku',
    power: 10000
    },
    {
    name:'Vegeta',
    power: 9500
    }
  ];

  onNewCharacter(character: Character):void{ //Como este es el componente principal de esta pantalla
    this.characters.push(character);
    //Es aqui donde realizaria las fuunciones
  }

  onDeleteCharacter(index: number):void{
    this.characters.splice(index, 1);
  }



}
