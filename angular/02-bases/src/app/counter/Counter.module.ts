import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/Counter.component";

@NgModule({
  declarations: [
    CounterComponent //Este es para que se pueda utilizar dentro del mismo grupo de componentes
  ],
  exports: [
    CounterComponent //Y este es para exportarlo a cualquier otro grupo de componentes
  ]
})

export class CounterModule{}
