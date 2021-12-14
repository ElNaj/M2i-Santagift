import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau';

@Component({
  selector: 'app-cadeau-card',
  templateUrl: './cadeau-card.component.html',
  styleUrls: ['./cadeau-card.component.css']
})
export class CadeauCardComponent implements OnInit {

  @Input()
  cadeau !: Cadeau;
  // new Cadeau(1, "Voiturette", "Voiturette pour enfant.", 85.65, 
  // "https://cdn.laredoute.com/products/9/5/0/95025d6df55c085ef85bfe4e1f155329.jpg?imgopt=twic&twic=v1/resize=800",
  // "https://www.laredoute.fr/ppdp/prod-521711567.aspx?dim1=1001&dim2=1000&docid=00000000000001&cod=PSN00141345FR&gclsrc=aw.ds&kard=1&kClkId=211214141124528145&kVsId=211214141124527465&gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqeBeBhtRzHEDJ1h8vFN23PxL0bwBMc539T5CRIWs89zv53MKygM-MaAppfEALw_wcB");

  @Output()
  retirerCadeauEvent = new EventEmitter<number>();
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  retirerCadeau() {
    this.retirerCadeauEvent.emit(this.cadeau.id);
  }

}
