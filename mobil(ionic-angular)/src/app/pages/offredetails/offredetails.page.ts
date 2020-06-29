import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OffreService } from '../../services/offre/offre.service'
import { UxService } from '../../services/ux/ux.service'
import { Offre } from '../../models/offre.class'
import loginInfo from '../../_helpers/userifos/login-infos'

@Component({
  selector: 'app-offredetails',
  templateUrl: './offredetails.page.html',
  styleUrls: ['./offredetails.page.scss'],
})
export class OffredetailsPage implements OnInit {
  loading: boolean = false;
  succed: boolean = false;
  error: boolean = false;
  _oneOffre: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public offreService: OffreService,
    public ux: UxService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      const { offreId } = data

      this.offreService.getOffreById(offreId).then(({ data }) => {

        //  we use [0] because data come in array with one element 
        this._oneOffre = data[0]

      })
    })
  }

  postuler(idOffre) {

    this.ux.showLoadingController();
    this.offreService.postulerOffre(idOffre, loginInfo.getUserId()).then(
      ({ data }: any) => {
        this.ux.hideLoadingController();
        this.ux.showToastController(data.message)
      }
      , ({ response }) => {
        const message = (response != undefined && response != null) ? response.data.message : "somthing wrong";
        this.ux.hideLoadingController();
        this.ux.showToastController(message)
      });

  }



  async ionViewWillEnter() {
    this.ux.prepareLoadingController("Login");
  }
}
