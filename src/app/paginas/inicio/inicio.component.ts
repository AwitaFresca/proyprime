import { Component, OnInit } from '@angular/core';

import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  

  constructor() { }

  declare events: any[];

  ngOnInit(): void {
    this.events = [
      {status: 'Orden', icon: PrimeIcons.SHOPPING_CART , image: 'carro.png'},
      {status: 'Procesamiento', icon: PrimeIcons.COG , image: 'reloj-de-arena.png'},
      {status: 'Empaquetamiento', icon: PrimeIcons.ENVELOPE , image: 'paquete-o-empaquetar.png'},
      {status: 'Delivery', icon: PrimeIcons.CHECK , image: 'camion-de-reparto.png'},
  ];

  }

}
