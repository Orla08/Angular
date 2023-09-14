import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
  <h3>{{counter}}</h3>
  <button (click)="restar(1)">-</button>
  <button (click)="resetear()">Reset</button>
  <button (click)="sumar()">+</button>
  `
}) //DECORADOR QUE TRANSFORMA CLASES EN COMPONENTES
export class CounterComponent {


  public counter: number= 10;

  sumar():void {
    this.counter++;
  }
  restar(value:number):void {
    this.counter -= value;
  }
  resetear():void {
    this.counter = 10;
  }

}
