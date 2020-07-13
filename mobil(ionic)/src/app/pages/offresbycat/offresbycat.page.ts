import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OffreService } from '../../services/offre/offre.service'
import { UxService } from '../../services/ux/ux.service'

import { Offre } from '../../models/offre.class'
@Component({
  selector: 'app-offresbycat',
  templateUrl: './offresbycat.page.html',
  styleUrls: ['./offresbycat.page.scss'],
})
export class OffresbycatPage  {
  listOffres: Offre
  constructor(
    public activatedRoute: ActivatedRoute,
    public offreService: OffreService ,
    public ux:UxService
  ) { }

  componentDidMount() {
    this.getOffreBycat()

  }
  getOffreBycat() {
    this.ux.showLoadingController();
    this.activatedRoute.queryParams.subscribe(data => {
      this.offreService.getOffresByCat(data.idOffre)
        .then(({ data }) => {
          this.ux.hideLoadingController();
          this.listOffres = data;

        },()=>{


          this.ux.hideLoadingController();
        })

    })

  }

  async ionViewWillEnter() {
    this.ux.prepareLoadingController("Loading...");
  }



  ionViewDidEnter() {
    this.componentDidMount()
  }
}
