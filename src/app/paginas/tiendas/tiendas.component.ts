import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  carousel:string[]=["assets/establecimientos/cipolletti.jpg","assets/establecimientos/neuquen.jpg","assets/establecimientos/allen.jpg"]

  constructor() { }

  ngOnInit(): void {
  }

}
