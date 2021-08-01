import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { InicioComponent } from './paginas/inicio/inicio.component';
import { InstrumentosComponent } from './paginas/instrumentos/instrumentos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { MiembrosComponent } from './paginas/miembros/miembros.component';
import { TiendasComponent } from './paginas/tiendas/tiendas.component';
import { PrimeModule } from './prime-module';

import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './paginas/instrumentos/productservice';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InstrumentosComponent,
    ContactoComponent,
    MiembrosComponent,
    TiendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeModule,
    HttpClientModule,
    
    

    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
