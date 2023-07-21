import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { administrador } from '../modelo/administrador';
import { LoginRegisService } from '../service/login-regis.service';
import { AdministracionService } from '../service/administracion.service';
import { persona } from '../modelo/persona';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-login-regis',
  templateUrl: './login-regis.component.html',
  styleUrls: ['./login-regis.component.css']
})
export class LoginRegisComponent implements OnInit {

  adm: administrador = new administrador();
  perV: persona = new persona();
  admV: administrador = new administrador();
  persn: persona[];

  cedularecuperar: string;

  constructor
    (
      private router: Router,
      private service: LoginRegisService,
      private admservice: AdministracionService


    ) { }


  ngOnInit(): void {

  }

  @ViewChild('container') container: ElementRef;
  @ViewChild('overlayCon') overlayCon: ElementRef;
  @ViewChild('overlayBtn') overlayBtn: ElementRef;


  ngAfterViewInit() {

    this.overlayBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.toggle('right-panel-active');

      this.overlayBtn.nativeElement.classList.remove('btnScaled');
      window.requestAnimationFrame(() => {
        this.overlayBtn.nativeElement.classList.add('btnScaled');
      });
    });


  }





  modeloadm: administrador = new administrador();
  modeloper: persona = new persona();
  bolUser: boolean = false;


  registrar(mdpers:persona,mdadm:administrador) {
    if (mdpers.cedula != "" && mdadm.usuario !="" && mdadm.contrase != "") {

      alert('entra en el bucle');

      this.service.getPersonaCedula(this.modeloper).subscribe(data => {

        if (data) {

          console.log("CEDULA EXISTENTE");


        } else {
          console.log("CEDULA DISPONIBLE");
          localStorage.setItem("cedula",this.modeloper.cedula.toString());
          localStorage.setItem("user",this.modeloadm.usuario.toString());
          localStorage.setItem("pass",this.modeloadm.contrase.toString());

          this.iraregistro();
        }

      })


    } else {
      Swal.fire('Registro', 'RELLENE LOS DATOS', 'warning');
    }
  }
  iraregistro(){
    this.router.navigate(['/registro-persona'])
  }



  principal(modelAdm: administrador) {

    if (modelAdm.usuario != "" && modelAdm.contrase != "") {

      this.service.getUsuarioUserPass(this.modeloadm).subscribe(data => {
        //comparar si se encontro un usuario o no
        if (data != null) {
          this.modeloadm = data;

          // localStorage.setItem("userId",this.modeloUsuario.usuId.toString());
          //localStorage.setItem("userName",this.modeloadm.admusuario.toString());
          // var usuarioJSON = JSON.stringify(this.modeloUsuario);
          // localStorage.setItem("usuarioObj", usuarioJSON);

          Swal.fire('LOGIN', 'USUARIO ENCONTRADO', 'success');

          this.router.navigate(["/bienvenida"]);

        } else {

          Swal.fire('LOGIN', 'USUARIO O CONTRASEÑA INCORRECTOS', 'error');
        }
      });
    } else {
      Swal.fire('LOGIN', 'RELLENE LOS DATOS POR FAVOR', 'warning');
    }

  }
  reloadPage(): void {
    location.reload();
  }

  guardarAdministrador() {
    this.admservice.registrarAdministrador(this.adm).subscribe(dato => {
      console.log(dato);
      Swal.fire('Correcto', 'Administrador Guardado', 'success')
    })
  }

  onSubmit() {
    this.guardarAdministrador();
  }

}
