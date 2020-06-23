import { Component, OnInit } from '@angular/core';
import { OffreService } from '../../services/offre/offre.service'
import userInfo from '../../_helpers/userifos/login-infos'
@Component({
  selector: 'app-myoffres',
  templateUrl: './myoffres.page.html',
  styleUrls: ['./myoffres.page.scss'],
})
export class MyoffresPage implements OnInit {
  listOffres: any;
  constructor(public offreService: OffreService) { }

  ngOnInit() {
    this.offreService.getMyOffres(userInfo.getUserId())
      .then(({ data }) => {

        this.listOffres = data;

      })
  }


}
