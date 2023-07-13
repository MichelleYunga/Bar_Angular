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
import { HeaderAdministradorComponent } from './header-administrador/header-administrador.component';


const routes:Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login',component:LoginRegisComponent},
  {path: 'bienvenida',component:BienvenidaComponent},
  {path:'header-adm', component:HeaderAdministradorComponent}

]

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginRegisComponent,
    BienvenidaComponent,
    HeaderAdministradorComponent
    
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
