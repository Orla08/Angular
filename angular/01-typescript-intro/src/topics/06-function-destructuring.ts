export interface Product { //Modelo para productos
    description: string;
    price: number;
}

const phone: Product = { //Creamos el primer objeto
    description: "Nokia A1",
    price: 150.0
}
//Desestructuracion
//const {description:nombre1, price:precio1} = phone;

const tablet: Product = {  //Creamos el segundo objeto
    description: "iPad Air",
    price: 250.0
}
//Desestructuracion
//const {description:nombre2, price:precio2} = tablet;



export interface TaxCalculationOptions{
    tax:number;
    products:Product[]; //Arreglo de productos
}



//El tipo de la funcion normalmente es un array de numero pero podemos tambien colocar que sea un array de dos numeros asi: [number, number]
export function taxCalculation (options : TaxCalculationOptions) : number[] {  //Options es un objeto donde se guardaran todos los argumentos que se utilizaran dentro de esta funcion

    const {tax, products} = options;
    let total = 0;
    //options.products.forEach(product => { //Accedemos a la clase instanciada a su array y los recorremos product los itera
    
    products.forEach(product => { //O colocar dentro del parametro de la funcion del forEach ({price})
        const {price} = product;
        //total += price; //Acumulamos el precio que sacamos de la desestructuracion del objeto que que itera al array
        total += product.price; //Acumulamos el precio de todos los productos
    })
    return [total, total*options.tax]; //Retornamos un array el cual entrega el totalAcumulado y el impuesto de ese total
    //const {tax, products} = options;
}





const shoppingCart = [phone, tablet]; //Tiene dos productos dentro de ese carro de compra
const tax = 0.15; //Impuesto

//const [total, impuesto] = taxCalculation({}) <= Asi
const result = taxCalculation({ // O asi
    tax:tax, //Puedes dejarlo asi o simplemente tax teniendo en cuenta que se llama igual que el atributo
    products:shoppingCart,
})

const [total, impuesto] = result; //Des

console.log(total);
console.log(impuesto);


console.log('Total: '+ result[0])
console.log('Impuesto: '+ result[1])

