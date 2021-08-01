import { Component, OnInit } from '@angular/core';
import { ProductService } from '../instrumentos/productservice';
import { Product } from '../instrumentos/product';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService:
    ProductService, private primengConfig: PrimeNGConfig) { }


  ngOnInit(): void {
    this.productService.getProductsSmall().then(cars => this.products = cars);
    this.primengConfig.ripple = true;
  }

}
