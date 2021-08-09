import { Component, OnInit } from '@angular/core';

import { MenuItem, PrimeNGConfig } from 'primeng/api';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {
  visibleSidebar2: any;

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private primengConfig: PrimeNGConfig) {}
   

  declare items: MenuItem[];

  ngOnInit() {
    this.primengConfig.ripple = true;
      this.items = [
          {
              label:'Inicio',
              routerLink:"inicio",
              
          },
          {
              label:'Tienda',
              routerLink:"instrumentos",
            
          },
          {
              label:'Establecimientos',
              routerLink:"tiendas",
          },
          {
            label:'Miembros',
            routerLink:"miembros",
        },
          {
            label:'Contacto',
            routerLink:"contacto",
        },
      ];
  } 

}
