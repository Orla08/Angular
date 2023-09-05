

const name = 'Strider'; //consejo dejar el cursor en las variables para saber sus tipos

let hpPOints : number | string = 0;  //De esta forma le indico a la variable que puede ser numero o string

let booleano : boolean = true;

hpPOints = 'Hola mundo'; //Podemos ver que arriba es un numero y aca es una cadena normalmente eso seria un error

console.log({
    name, hpPOints, booleano
})

export {}