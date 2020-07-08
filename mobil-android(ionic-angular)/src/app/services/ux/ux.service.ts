import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController, MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UxService {

  loadingControllersub: any;

  constructor(public menuController: MenuController, public toastController: ToastController, public loadingController: LoadingController) { }

  async prepareLoadingController(message: string) {
    this.loadingControllersub = await this.loadingController.create({
      message: message,
      mode: 'ios',
      spinner:"bubbles",
      cssClass:"w3-text-red"
    });
  }

  showLoadingController() {
    this.loadingControllersub.present();
  }


  hideLoadingController() {
    this.loadingControllersub.dismiss();
  }
  async showToastController(msg: string,color) {

    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      color:color,
     
      buttons: [

        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    toast.present();
  }
  openMenuController() {
    this.menuController.open();
  }
  closeMenuController() {
    this.menuController.close();
  }
}

