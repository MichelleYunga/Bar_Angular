import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../service/persona.service';
import { persona } from '../modelo/persona';
import Swal from 'sweetalert2';
import { LoginRegisService } from '../service/login-regis.service';
import { administrador } from '../modelo/administrador';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit  {
  
  constructor(
    private service: LoginRegisService,
    private router: Router
  ){}

  pers:persona = new persona();
  adm: administrador = new administrador();

  cedula:string="";
  bandera:number=0;

  ngOnInit(): void {
    this.recuperarData();
  }
  
  recuperarData(){
    let ced = String (localStorage.getItem("cedula"));
    let usu = String (localStorage.getItem("user"));
    let pas = String (localStorage.getItem("pass"));

    this.pers.cedula=ced;
    this.adm.usuario=usu;
    this.adm.contrase=pas;

    localStorage.removeItem("cedula");
    localStorage.removeItem("user");
    localStorage.removeItem("pass");

  
    

  }

  verificarDatos(){
    this.bandera=0;

    if(this.pers.nombre==""){
      this.bandera=this.bandera+1;
      
    }
    if(this.pers.apellido==""){
      this.bandera=this.bandera+1;
    }
    if(this.pers.telefono==""){
      this.bandera=this.bandera+1;
    }

    if(this.pers.correo==""){
      this.bandera=this.bandera+1;
    }

    if(this.pers.direccion==""){
      this.bandera=this.bandera+1;
    }

    if(this.pers.correo==""){
      this.bandera=this.bandera+1;
    }

    if(this.bandera==0){

      console.log(this.pers);

      this.service.createPersona(this.pers).subscribe(data =>{
        this.adm.id_persona=data.cedula;

        this.service.createAdmnistrador(this.adm).subscribe(data =>{
          
          Swal.fire('REGISTRO','PERSONA CREADA EXITOSAMENTE','success');
          this.router.navigate(["login"]);
        })

        
      })
    }
  }

  




}
