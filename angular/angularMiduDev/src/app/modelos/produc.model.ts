//Aqui creas los modelos de las cosas que necesitas por ejemplo

export interface Product {
  id: number;
  title: string;
  price: number;
  images:string[]; //Puede que sea un solo producto pero tiene varias fotos ese producto
  //Es por eso que se coloca que sera de tipo string y a la vez que es un array es decir un array de string

}
