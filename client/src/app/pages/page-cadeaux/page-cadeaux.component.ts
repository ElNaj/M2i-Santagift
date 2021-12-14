import { Component, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau';

@Component({
  selector: 'app-page-cadeaux',
  templateUrl: './page-cadeaux.component.html',
  styleUrls: ['./page-cadeaux.component.css']
})
export class PageCadeauxComponent implements OnInit {

  cadeaux !: Cadeau[];
  constructor() { }

  ngOnInit(): void {
  }

  supprimerCadeau(id : number) {
    // this.service.delete(id).subscribe(() => {
    //   this.initChats();
    // })
  }

}
