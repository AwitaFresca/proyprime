import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { InstrumentosComponent } from './paginas/instrumentos/instrumentos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { MiembrosComponent } from './paginas/miembros/miembros.component';
import { TiendasComponent } from './paginas/tiendas/tiendas.component';



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
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    CardModule,

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
