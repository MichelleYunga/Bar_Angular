export class administrador{
    
    admid: number;
    admcedula: string;
    admusuario: string;
    admcontrasena: string;


    constructor(id_administrador ?: number, cedula ?: string, usuario ?: string, contrase ?: string){
        
        this.admid = id_administrador ||0;
        this.admcedula = cedula ||'';
        this.admusuario = usuario ||'';
        this.admcontrasena = contrase ||'';
        
       
    }

}