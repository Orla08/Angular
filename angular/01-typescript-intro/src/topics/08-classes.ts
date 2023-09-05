
export class Person{
    //Propiedades Atributos
    public firstName: string;
    public lastName : string;
    private address : string;

    constructor(name: string, lastName: string, address: string) {
        this.firstName = name;
        this.lastName = lastName;
        this.address = address;
    }
    //Las funciones son metodos
}

export class Person2{ //Esta forma de crear clase es la misma de la de arriba y mucho mas sencilla
    constructor(
        public name: string, 
        private address:string = "Calle 13 b #26-38"
        ) {}
    //Las funciones son metodos
}

/* const Orlando = new Person("Iron Man", "" ,"Quillami");
const Orlando2 = new Person2("Jose Man", "Manuel 30"); */

/* export class Hero extends Person2{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super('Orlando'); //Cuando una clase extiende de otra en las acciones del constructor va un super
        //Este super llevara los valores de los atributos de la clase que está siendo extendida
    }

} */
export class Hero{ 
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person, //De esta forma evitamos extender clases directamente 
        //Y si la clase llega a verse afectada no afectara a su herencia
        ){} 
}

const person = new Person("Tony", "Stark", 'Direccion del Heroe')


const superHeroe = new Hero("Iron Man",30,"Tony Stark",person);

console.log(superHeroe);
// esto es lo que muestra la consola:  
//Hero {name: 'Orlando', address: 'Calle 13 b #26-38', alterEgo: 'Iron Man', age: 30, realName: 'Tony Stark'}
