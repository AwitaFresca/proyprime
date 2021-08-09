import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { InicioComponent } from './paginas/inicio/inicio.component';
import { InstrumentosComponent } from './paginas/instrumentos/instrumentos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { MiembrosComponent } from './paginas/miembros/miembros.component';
import { TiendasComponent } from './paginas/tiendas/tiendas.component';
import { PrimeModule } from './prime-module';

import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './paginas/guitarras/productservice';
import { GuitarrasComponent } from './paginas/guitarras/guitarras.component';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InstrumentosComponent,
    ContactoComponent,
    MiembrosComponent,
    TiendasComponent,
    GuitarrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeModule,
    HttpClientModule,
    FormsModule,
    RatingModule,
    DropdownModule,
    DialogModule,
    PanelModule,
    RippleModule,
    InputTextModule,
    
    

    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
