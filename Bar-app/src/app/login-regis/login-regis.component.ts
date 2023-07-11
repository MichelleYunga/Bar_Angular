import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { administrador } from '../modelo/administrador';
import { LoginRegisService } from '../service/login-regis.service';

@Component({
  selector: 'app-login-regis',
  templateUrl: './login-regis.component.html',
  styleUrls: ['./login-regis.component.css']
})
export class LoginRegisComponent implements OnInit {

  constructor(private router:Router, private service: LoginRegisService ){}


  ngOnInit(): void {
    
  }

  /* sirve para poner las animaciones  */
  /* en el html hay que agregar un #idname */
  /* posdata en el tsconfig.json se desactiva el requerimiento para obligar a definir las variables  */
  @ViewChild('signUpBtn') signUpBtn: ElementRef;
  @ViewChild('signInBtn') signInBtn: ElementRef;
  @ViewChild('container') container: ElementRef;

  //sirve en para las animaciones y cambiar de estado remplaza a javascript
  ngAfterViewInit() {
  
    this.signUpBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.add('sign-up-mode');
    });

    
    this.signInBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.remove('sign-up-mode');
    });

  }
  
  modeloadm: administrador = new administrador();
  
  principal(modelAdm:administrador){

    if (modelAdm.admusuario!="" && modelAdm.admcontrasena!="") {
      
      this.service.getUsuarioUserPass(this.modeloadm).subscribe(data=>{
        //comparar si se encontro un usuario o no
        if (data!= null) {
          this.modeloadm=data;

          // localStorage.setItem("userId",this.modeloUsuario.usuId.toString());
          localStorage.setItem("userName",this.modeloadm.admusuario.toString());
          // var usuarioJSON = JSON.stringify(this.modeloUsuario);
          // localStorage.setItem("usuarioObj", usuarioJSON);
          
          Swal.fire('LOGIN','USUARIO ENCONTRADO','success');
                
        }else{
      
          Swal.fire('LOGIN','USUARIO O CONTRASEÑA INCORRECTOS','error');
        }
      });
    }else{
      Swal.fire('LOGIN','RELLENE LOS DATOS POR FAVOR','warning');
    }

   
  }

}
