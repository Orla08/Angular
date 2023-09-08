import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string= 'Hola mundo';
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
