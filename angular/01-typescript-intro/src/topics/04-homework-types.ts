/*
    ===== Código de TypeScript =====
*/

interface Address { //Recordemos que estos son modelos de objetos solamente
    street:string, 
    country:string,
    city:string
}

interface SuperHero { //Recordemos que estos son modelos de objetos solamente
    name : string;
    age: number;
    address :Address; //Tenemos un ombjeto de tipo interface dentro de una interface
    showAddress :()=>string;
}


const superHeroe: SuperHero = { //Aqui ya estamos creando un objeto como tal y atraves de estos atributos es que podemos trabajr
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};