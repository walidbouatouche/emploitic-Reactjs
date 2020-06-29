import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UxService } from '../../services/ux/ux.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any = {
    mail: "",
    password: ""
  }
  mail: any;
  singupBtn: boolean;
  loginBtn: boolean;
  constructor(
    public ux: UxService,
    public authService: AuthService
  ) {
    this.loginBtn = true;


  }



  ngOnInit() {

  }

  showLogin() {
    this.singupBtn = false;
    this.loginBtn = true;

  }
  showSingup() {
    this.singupBtn = true;
    this.loginBtn = false;

  }


  login() {

    this.authService.loginUser(this.user).then(
      ({ data }: any) => {
        const { token, userId } = data
        this.ux.hideLoadingController();
        this.authService.setToken(token)
        this.authService.setUserId(userId)
      }
      , ({ response }) => {
        const message = (response != undefined && response != null) ? response.data.message : "somthing wrong";
        this.ux.hideLoadingController();
        this.ux.showToastController(message)
      });


  }
  singup() {
    this.ux.showLoadingController();
    this.authService.signupUser(this.user).then(
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

  sendpass() {

    alert(" Send pass to email ")
  }


  async ionViewWillEnter() {
    this.ux.prepareLoadingController("Login");
  }


}


