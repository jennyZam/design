import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { UsuarioComponent } from './usuario/usuario.component';

let routes: Routes = [
  { path: '', component: DesignComponent},
  { path: 'design', component: DesignComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'administrador', component: AdministradorComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'usuario', component: UsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
