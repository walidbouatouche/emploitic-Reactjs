import { Component, OnInit, ViewChild } from '@angular/core';
import { UxService } from '../../services/ux/ux.service'
import { Router } from '@angular/router';
import categorieoffre from '../../static/cat'
import { OffreService } from '../../services/offre/offre.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  public cat: any; // list of categories

  constructor(
    public route: Router,
    public ux: UxService,
    public offreService: OffreService
  ) {


  }

  ngOnInit() {
    this.cat = categorieoffre;
 
  }



}
