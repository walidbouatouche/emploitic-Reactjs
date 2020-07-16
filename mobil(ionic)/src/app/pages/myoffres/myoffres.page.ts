import { Component, OnInit } from '@angular/core';
import { OffreService } from '../../services/offre/offre.service'
import userInfo from '../../_helpers/userifos/login-infos'
import { UxService } from '../../services/ux/ux.service'

@Component({
  selector: 'app-myoffres',
  templateUrl: './myoffres.page.html',
  styleUrls: ['./myoffres.page.scss'],
})
export class MyoffresPage {
  listOffres: any;
  constructor(public offreService: OffreService,
    public ux: UxService) { }
 

  getMyOffre() {
    this.ux.showLoadingController()
    this.offreService.getMyOffres(userInfo.getUserId())
      .then(({ data }) => {
        this.ux.hideLoadingController()
        this.listOffres = data;

      }
     , ({ response }) => {
      const message = (response != undefined && response != null) ? response.data.message : "somthing wrong";
      this.ux.hideLoadingController();
      this.ux.showToastController(message, 'danger')
     

    } ) 

  }



 




  ionViewDidEnter() {
    this.getMyOffre()
  }

}
