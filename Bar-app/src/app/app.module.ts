import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.componentnt';
import { LoginRegisComponent } from './login-regis/login-regis.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRegisService } from './service/login-regis.service';
import { AdministracionService } from './service/administracion.service';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AdminrutasComponent } from './adminrutas/adminrutas.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteService } from './clientes/cliente.service';
import { FormComponentPr } from './producto/form.component';
import { ProductoService } from './service/producto.service';
import { RegistroPersonaComponent } from './registro-persona/registro-persona.component';


const routes:Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login',component:LoginRegisComponent},
  {path: 'bienvenida',component:BienvenidaComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'clientes', component:ClientesComponent},
  {path:'rutas', component:AdminrutasComponent}, 
  {path:'headerA', component:HeaderAdminComponent},
  {path:'categoria', component:CategoriaComponent},
  {path:'producto', component:ProductoComponent},
  { path: 'producto/form', component: FormComponentPr },
  {path:'registro-persona', component:RegistroPersonaComponent}

  
  
  
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
    HeaderAdminComponent, 
    ProductoComponent,
    CategoriaComponent,
    FormComponentPr,
    RegistroPersonaComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginRegisService, AdministracionService,ClienteService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
