//Los decoradores no son mas que funciones que pueden modicicar el comportamiento de clases, propiedades y metodos



function classDecorator(){

}  


//@classDecorator()
export class SuperClass {

    public myProperty: string = "ABC123";

    print(){
         console.log("Hola mundo")
    }

}

console.log(SuperClass)