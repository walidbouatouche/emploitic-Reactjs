import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service'
import { UxService } from '../../services/ux/ux.service'
@Component({
  selector: 'app-myprofil',
  templateUrl: './myprofil.page.html',
  styleUrls: ['./myprofil.page.scss'],
})
export class MyprofilPage implements OnInit {
 _userInfo:any ;
  constructor(
    public authService: AuthService,
    public ux: UxService
  ) { }

  ngOnInit() {
    
  }


  updateUser(userData) {
    if(confirm("are you sure")){

 
    this.ux.showLoadingController();
    this.authService.updateUser(userData ).then(
      ({ data }: any) => {
        this.ux.hideLoadingController();
        if(data.message){
          this.ux.showToastController("update good !!",'success')
        }

      }
      , ({ response }) => {
        const message = (response != undefined && response != null) ? response.data.message : "somthing wrong";
        this.ux.hideLoadingController();
        this.ux.showToastController(message,'success')
      });

         }

  }

  
  async ionViewWillEnter() {
    this.ux.prepareLoadingController("Loading...");
  }

  upCvPdf(formData){
  
console.log(formData) 
 
      this.ux.showLoadingController();
      this.authService.updateCvFile(formData).then(
        ({ data }: any) => {
          this.ux.hideLoadingController();
          if(data.message){
            this.ux.showToastController("update Cv ",'success')
          }
          window.location.reload()
  
        }
        , ({ response }) => {
          const message = (response != undefined && response != null) ? response.data.message : "somthing wrong";
          this.ux.hideLoadingController();
          this.ux.showToastController(message,'danger')
        });
  
           
  }

}
