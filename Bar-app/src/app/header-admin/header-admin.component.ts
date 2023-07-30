import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {
  title: string = "ISTA BAR";


  constructor(private router: Router) {

  }
  cerrarSesion() {

    this.router.navigate(["login"]);
    Swal.fire('SESION FINALIZADA', 'Saliendo del sistema', 'success');
  }
}
