import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { ServiciosComponent } from './servicios/servicios.component';

let routes: Routes = [
  { path: '', component: DesignComponent},
  { path: 'design', component: DesignComponent},
  { path: 'servicios', component: ServiciosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
