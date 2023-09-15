import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter : EventEmitter<Character> = new EventEmitter();


  public character : Character = {
    name:'', //La manera en como estan conectadas estas propiedades con el formulario es colocandole
    power:0 // como name el mismo nombre de la propiedad es decir <input name='power'/>
  };
  //De esta forma estaran conectadas las propiedades con los inputs de los formularios
  //Cambiaran su valor inmediatamente tal y como se vaya digitando en dicho input
  emitCharacter():void {
    console.log(this.character)

    if (this.character.name.length === 0) return; //Si el nombre que mandas no tiene nada no devolveras nada
    this.onNewCharacter.emit(this.character) //Emite el objeto escrito en los inputs

    this.character = {name: '', power: 0}
  }


}
