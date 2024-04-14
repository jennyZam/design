import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignComponent } from './design/design.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FooterComponent } from './footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    CabeceroComponent,
    FooterComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
