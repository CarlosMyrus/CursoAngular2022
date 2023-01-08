import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image:string="https://http2.mlstatic.com/D_NQ_NP_899569-MLC48051928937_102021-O.jpg";
  public Titulo:string="Curso de angular con Interpolacion";
  constructor() { }

  ngOnInit(): void{

  }

}
