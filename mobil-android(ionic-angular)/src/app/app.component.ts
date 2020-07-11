import { Component, ViewChild } from '@angular/core';
import { UxService } from "./services/ux/ux.service";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
import { LogoutService } from './_helpers/logout/logout.service'
import { AuthService } from './services/auth/auth.service'
import { MyheaderComponent } from './shared/myheader/myheader.component'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  iconLoginStatus: boolean;
  @ViewChild(MyheaderComponent, { static: true }) private MyheaderComponent: MyheaderComponent;
  menu: any = [{
    id: 1,
    title: "home",
    _function: () => { this.go() },
    icon: "home-outline"
  },
  {
    id: 2,
    title: "Mon profil",
    _function: () => {
      this.route.navigateByUrl('myprofil')
      this.ux.closeMenuController()
    },
    icon: "person-outline"
  }
    ,
  {
    id: 3,
    title: " Mes candidature",
    _function: () => {

      this.route.navigateByUrl('myoffres')
      this.ux.closeMenuController()

    },
    icon: "basket-outline"
  }
    ,


  {
    id: 5,
    title: "close",
    _function: () => { this.close() },
    icon: "power-outline"
  }

  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public ux: UxService,
    public route: Router,
    public logoutService: LogoutService,
    public authService: AuthService
  ) {

    this.initializeApp();


  }


  alert(msg: string) {
    alert(msg);
  }
  initializeApp() {


    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.statusBar.hide();
      this.splashScreen.hide();

    });
  }

  close() {
    if (confirm(' vous')) {
      navigator['app'].exitApp();
    }
    else {
      this.ux.closeMenuController();
    }

  }
  go() {
    this.ux.closeMenuController();
    this.route.navigate(['/'])
  }
  logout() {
    this.logoutService.logout()
    this.go()

  }
  menuOpened() {
    this.iconLoginStatus = this.authService.isLogin();
    
  }

  menuClosed() {


  }
}
