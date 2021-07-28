import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { InstrumentosComponent } from './paginas/instrumentos/instrumentos.component';
import { MiembrosComponent } from './paginas/miembros/miembros.component';
import { TiendasComponent } from './paginas/tiendas/tiendas.component';

const routes: Routes = [

  {
    path:"inicio", component:InicioComponent
  },
  {
    path:"instrumentos", component:InstrumentosComponent
  },
  {
    path:"tiendas", component:TiendasComponent
  },
  {
    path:"miembros", component:MiembrosComponent
  },
  {
    path:"contacto", component:ContactoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
