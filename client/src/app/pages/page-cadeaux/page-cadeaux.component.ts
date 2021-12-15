import { Component, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau';
import { CadeauxHTTPService } from 'src/app/services/cadeaux-http.service';

@Component({
  selector: 'app-page-cadeaux',
  templateUrl: './page-cadeaux.component.html',
  styleUrls: ['./page-cadeaux.component.css']
})
export class PageCadeauxComponent implements OnInit {

  cadeaux : Cadeau[] = [];

  constructor(private service : CadeauxHTTPService) { }

  ngOnInit(): void {
    this.initCadeaux();
  }

  initCadeaux(){
    this.service.getAll().subscribe(data => {
      this.cadeaux = data;
    })
  }

  supprimerCadeau(id : string) {
    this.service.delete(id).subscribe(() => {
      this.initCadeaux();
    })
  }

}
