

export function whatsMyType<T>(argument:T):T{ //Los genericos ayudan a detectar el tipo de dato
    //Aun si tu no sabes que datos necesitas
    return argument;
}


const soyString = whatsMyType <string> ("Hola mundo"); //Alli le expicificas que el Generico T se convierta automaticamente en un string
const soyNumber = whatsMyType(123); 
const soyArray = whatsMyType <number[]> ([1,2,3,4,5]);

console.log(soyString.split(' ')); //Esta funcion split te devuelve un array dependiendo de su parametro
console.log(soyNumber.toFixed());
console.log(soyArray.join("-"));
