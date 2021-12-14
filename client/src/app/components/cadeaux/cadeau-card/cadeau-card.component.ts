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

  @Output()
  retirerCadeauEvent = new EventEmitter<number>();
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  retirerCadeau() {
    // this.retirerCadeauEvent.emit(this.cadeau.id);
  }

}
