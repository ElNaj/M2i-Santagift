import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadeauxHTTPService } from 'src/app/services/cadeaux-http.service';

@Component({
  selector: 'app-cadeau-form',
  templateUrl: './cadeau-form.component.html',
  styleUrls: ['./cadeau-form.component.css']
})
export class CadeauFormComponent implements OnInit {

  cadeauForm : FormGroup;

  constructor(
    private fb : FormBuilder, 
    private service : CadeauxHTTPService,
    private router : Router
  ) { 
    this.cadeauForm = this.fb.group({
      nom: "",
      img: "",
      siteMarchand: ""
    }) 
  }

  ngOnInit(): void {
  }

  ajouterCadeau() {
    this.service.create(this.cadeauForm.value).subscribe(() => {
      this.router.navigateByUrl("/page-cadeaux");
    }, err => {
      alert(err);
    }) 
  }
}
