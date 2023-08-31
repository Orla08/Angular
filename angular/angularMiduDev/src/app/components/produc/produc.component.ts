import { Component, Input} from '@angular/core'; //Estos son decoradores
import {Product} from './../../modelos/produc.model';
@Component({
  selector: 'app-produc',
  templateUrl: './produc.component.html',
  styleUrls: ['./produc.component.css']
})
export class ProducComponent {

  @Input() title: string=''; //De esta forma se mandan inputs por decirlo de cierta forma
  //Pero normalmente para eso se utilizan los modelos o interfaces

  @Input() product!: Product; //El signo de admiracion es un decir como: Relajate se que debo iniciarlizar el Objeto
  //Se que te debo enviar un producto con las caracteristicas de este

}
