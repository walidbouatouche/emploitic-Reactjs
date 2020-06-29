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
      mode: 'md'
    });
  }

  showLoadingController() {
    this.loadingControllersub.present();
  }


  hideLoadingController() {
    this.loadingControllersub.dismiss();
  }
  async showToastController(msg: string) {

    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      position: 'bottom',
     
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

