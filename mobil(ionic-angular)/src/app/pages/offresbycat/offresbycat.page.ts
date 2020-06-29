import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OffreService } from '../../services/offre/offre.service'
import { Offre } from '../../models/offre.class'
@Component({
  selector: 'app-offresbycat',
  templateUrl: './offresbycat.page.html',
  styleUrls: ['./offresbycat.page.scss'],
})
export class OffresbycatPage implements OnInit {
  listOffres: Offre
  constructor(
    public activatedRoute: ActivatedRoute,
    public offreService: OffreService
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(data => {
      this.offreService.getOffresByCat(data.idOffre)
        .then(({data}) => {
           
          this.listOffres = data;

        })

    })

  }

}
