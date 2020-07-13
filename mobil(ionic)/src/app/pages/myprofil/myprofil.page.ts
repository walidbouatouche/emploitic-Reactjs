import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service'
import { UxService } from '../../services/ux/ux.service'
@Component({
  selector: 'app-myprofil',
  templateUrl: './myprofil.page.html',
  styleUrls: ['./myprofil.page.scss'],
})
export class MyprofilPage implements OnInit {
  _userInfo: any;
  constructor(
    public authService: AuthService,
    public ux: UxService
  ) { }

  ngOnInit() {

  }


  updateUser(userData) {
    if (confirm("are you sure")) {
      
      this.ux.showLoadingController();
      this.authService.updateUser(userData).then(
        ({ data }: any) => {
          this.ux.hideLoadingController();
          if (data.message) {
            this.ux.showToastController("update good !!", 'success')
            this.ux.refrechPage()
          }

        }
        , ({ response }) => {
          const message = (response != undefined && response != null) ? response.data.message : "somthing wrong";
          this.ux.hideLoadingController();
          this.ux.showToastController(message, 'success')
          this.ux.refrechPage()

        });

    }

  }


  async ionViewWillEnter() {

    // every render of Compenent we call the loading for Promises data 
    this.ux.prepareLoadingController("Loading...");
  }

  upCvPdf(formData) {

    /* 
    * the title of cv is the id of user  when upload file
    * will crach the old pdf and replace by new pdf uploaded
     */

    this.ux.showLoadingController();
    this.authService.updateCvFile(formData).then(
      ({ data }: any) => {
        this.ux.hideLoadingController();
     
          this.ux.showToastController("update Cv ", 'success')

          // Refrech it optional you can not do it or not 

          this.ux.refrechPage()
        


      }
      , ({ response }) => {
    
        const message = (response != undefined && response != null) ? response.data.message : "somthing wrong";
        this.ux.hideLoadingController();
        this.ux.showToastController(message, 'danger')
      });


  }

}
