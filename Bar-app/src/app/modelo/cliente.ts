export class cliente {
    
    cliid: number = 0;
    clicedula: string ="";
    cliusuario: string ="";
    clicontraseña: string ="";


    constructor(id_cliente?:number, cedula ?: string, usuario ?: string, contraseña ?: string){
        this.cliid = id_cliente ||0;
        this.clicedula = cedula ||'';
        this.cliusuario = usuario || '';
        this.clicontraseña = contraseña || '';

        

    }


}