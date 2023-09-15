import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Input()
  public characterList : Character[] =[
    {
      name:'Trunks',
      power:2000
    },
  ]

  @Output()
  onDelete : EventEmitter<number> = new EventEmitter(); //Aqui emites el Evento


  deleteCharacter(i:number):void{
    // TODO: Emitir el ID del personaje
    console.log(i+1)
    this.onDelete.emit(i) //Cuando se presione el el boton y ejecute esta funcion emitiras
    //el index que se guarda en i
    //Recordemos que el valor emitido cuando lo vayamos a obtener se obtiene con un
    // ($event)
}



}
