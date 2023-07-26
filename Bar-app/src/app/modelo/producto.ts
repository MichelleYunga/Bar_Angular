import { Categoria } from "./categoria";

export class Producto{
    id_producto: number=0;
    prod_codigo: String="";
    prod_cantidad: number=0;
    prod_descripcion: string=""; 
    precio: number=0;
    prod_img: string=""; 

    categoria: Categoria; 

    constructor(){
        this.categoria=new Categoria(1, "Almuerzos");
    }
}



