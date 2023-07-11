import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.componentnt';
import { LoginRegisComponent } from './login-regis/login-regis.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginRegisService } from './service/login-regis.service';
import { AdministracionService } from './service/administracion.service';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path:'login',component:LoginRegisComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginRegisComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginRegisService, AdministracionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
