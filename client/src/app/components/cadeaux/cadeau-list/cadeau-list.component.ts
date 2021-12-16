import { Component, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau';
import { CadeauxHTTPService } from 'src/app/services/cadeaux-http.service';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.css']
})
export class CadeauListComponent implements OnInit {

  cadeaux : Cadeau[] = []; 

  constructor(private service : CadeauxHTTPService) { }

  ngOnInit(): void {
    this.initCadeaux();
  }
  
  initCadeaux(){
    this.service.getAll().subscribe(data => {
      this.cadeaux = data;
      console.log(data);
    })
  }

  supprimerCadeau(id : string) {
    this.service.delete(id).subscribe(() => {
      this.initCadeaux();
    })
  }
}
