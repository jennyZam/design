import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignComponent } from './design/design.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FooterComponent } from './footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    CabeceroComponent,
    FooterComponent,
    ServiciosComponent,
    LoginComponent,
    SignupComponent,
    ContactanosComponent,
    AdministradorComponent,
    NosotrosComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
