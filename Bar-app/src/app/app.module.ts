import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.componentnt';
import { LoginRegisComponent } from './login-regis/login-regis.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginRegisService } from './service/login-regis.service';
import { AdministracionService } from './service/administracion.service';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AdminrutasComponent } from './adminrutas/adminrutas.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';


const routes:Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login',component:LoginRegisComponent},
  {path: 'bienvenida',component:BienvenidaComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'clientes', component:ClientesComponent},
  {path:'rutas', component:AdminrutasComponent}, 
  {path:'headerA', component:HeaderAdminComponent}
  
  
  //rutas Administrador 
 // {
 //   path: 'adHeader', component: HadearAdminComponent, children: [
  /*    { path: 'adAdministrar', component: AdministrarComponent },
      { path: 'adUsuarios', component: UsuariosComponent },
      { path: 'adProductos', component: AdproductosComponent },
      { path: 'adCategoria', component: CategoriasComponent }
    ]
  },*/

]

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginRegisComponent,
    BienvenidaComponent,
    ClientesComponent,
    AdminrutasComponent,
    HeaderAdminComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginRegisService, AdministracionService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
