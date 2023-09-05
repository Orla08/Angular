function addNumbers (a:number, b:number) : number { //Funcion tipica
    return a+b;
}


const addNumbers2 = (a:number, b:number) : string =>{ //Arrow function o funcion flecha
    return `${a+ b}`
}

function multiplicacion (primerNumero:number, segundoNumero?:number, baseNumero:number =3) : number {
    return primerNumero*baseNumero
}
 
/* const result : number = addNumbers(9,10); 
const result2 : string = addNumbers2(9,10); 
const result3 : number = multiplicacion(3); 
console.log(result,result2,result3); */


interface Character{ //Creamos una interfaz para saber los tipos de datos del objeto
    name : string;
    hp:number;
    showHp : () => void;
} 

const Orlando :Character = { //Creamos un objeto en este caso una persona de tipo interfaz
    name: 'Orlando',
    hp : 23,
    showHp(){
        console.log(`Puntos de vida de ${this.name} son: ${this.hp}`)
    },
}

const healCharacter = (character: Character, amount:number = 10) => { //Creamos una funcion que por parametro tendra el objeto creado y un numero
    character.hp += amount;
}


healCharacter(Orlando, 10); //Ejecutamos la funcion que realiza la acumulacion
healCharacter(Orlando, 20);

Orlando.showHp(); //Y llamamos la funcion del objeto que muestra el console.log


export {};