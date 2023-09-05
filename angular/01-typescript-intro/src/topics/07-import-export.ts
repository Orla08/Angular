import {Product} from './06-function-destructuring';
//import {TaxCalculationOptions} from './06-function-destructuring';
import {taxCalculation} from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description:'Redmi note 11',
        price:800
    },
    {
        description:'Redmi note 12',
        price:1200
    }
];

// const opciones : TaxCalculationOptions = {
//     tax:0.15,
//     products:shoppingCart
// }

let impuesto1 : number = 0.15



// const [total1, impuesto] = taxCalculation(opciones);
const [total2, impuesto2] = taxCalculation({
    products : shoppingCart,
    tax : 0.15
});

console.log('Total: '+total2 +" y el impuesto fue de:"+impuesto2) 