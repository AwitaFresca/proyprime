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
      {status: 'Ordered', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'carro.png'},
      {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7', image: 'reloj-de-arena.png'},
      {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800', image: 'paquete-o-empaquetar.png'},
      {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B', image: 'camion-de-reparto.png'},
  ];

  }

}
