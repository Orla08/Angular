export interface Passenger{

    name:string;
    children?: string[];

}

const passenger1 : Passenger = {
    name: "Orlando"
}

const passenger2 : Passenger = {
    name: "Laura",
    children : ["Jose","Federico"]
}

const printChildren = (passenger:Passenger) => {

    const cantidadHijos = passenger.children?.length || 0  ; //El signo de interrogacion indica que si el array existe haga el .lenght sino es =0.
    console.log(`La cantdad de hijos de ${passenger.name} son ${cantidadHijos}` );
}

printChildren(passenger2);         
printChildren(passenger1);         