export class Categoria{
    id_categoria: number;
    nombre: string; 
    tipo: string=""; 


    Categoria(){

    }

    constructor(id_categoria: number, nombre: string){
        this.id_categoria= id_categoria,
        this.nombre=nombre;
    }
}