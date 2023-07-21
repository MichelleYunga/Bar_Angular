export class persona{
    
    id_persona: number = 0;
    cedula: string = "";
    nombre: string = "";
    apellido: string = "";
    telefono: string = "";
    correo: string = "";
    direccion: string ="";
    fechanacimiento: string ="";


    constructor(per_id?:number,per_cedula?: string,per_nombre?: string,per_apellido?: string,per_telefono?: string,per_correo?: string,per_direccion?: string,per_fechanacimiento?: string){
        this.id_persona = per_id ||0;
        this.cedula = per_cedula ||'';
        this.nombre = per_nombre ||'';
        this.apellido = per_apellido ||'';
        this.telefono = per_telefono ||'';
        this.correo = per_correo || '';
        this.direccion = per_direccion ||'';
        this.fechanacimiento = per_fechanacimiento ||'';
    }

  



}