
let skills : string[] = ['Bash','Counter','Healing,' ];
//Si no le asignas el tipo al array el intentara tomar los tipos por defectoo
//Pero si se lo asignas el array por ley debe contener valores de ese mismo tipo.


interface Persona {
    name: string;
    age: number;
    address: string;
    heigth: string;
    habilidades? : string[]; //Como le coloque un ? el atributo habilidad[] puede o no ser utilizado
    //En este caso indica que habilidades puede ser un array de string o undefinde
}


const Orlando : Persona = {
    name: "Orlando Enrique De La Hoz",
    age: 23,
    address: "Calle 15 #26-16",
    heigth: "1.73cm",
    habilidades:["La monda", "La verga"]
}

console.table(
    Orlando
)



export {}