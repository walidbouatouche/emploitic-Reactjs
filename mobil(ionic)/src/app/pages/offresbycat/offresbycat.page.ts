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
export class OffresbycatPage {
  listOffres: Offre
  constructor(
    public activatedRoute: ActivatedRoute,
    public offreService: OffreService,
    public ux: UxService
  ) { }

  ionViewDidEnter() {
    this.getOffreBycat()
  }

  getOffreBycat() {
    this.ux.showLoadingController();
    this.activatedRoute.queryParams.subscribe(data => {
      this.offreService.getOffresByCat(data.idOffre)
        .then(({ data }) => {
          this.ux.hideLoadingController();
          this.listOffres = data;

        },
          ({ response }) => {
            const message = (response != undefined && response != null) ? response.data.message : "somthing wrong";
            this.ux.hideLoadingController();
            this.ux.showToastController(message, 'danger')
          });


    })

  }





}
