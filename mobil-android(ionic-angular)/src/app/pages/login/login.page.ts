import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UxService } from '../../services/ux/ux.service';
import { goodPassword, required, validateEmail } from '../../_helpers/speedvalisation'
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
    this.showLogin()


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
    if (!validateEmail(this.user.mail)) {
      this.ux.showToastController('You have entered an invalid email address!', 'danger')

      return false;
    }
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
        this.ux.showToastController(message, 'danger')
      });


  }
  singup() {
    if (!validateEmail(this.user.mail)) {
      this.ux.showToastController('You have entered an invalid email address!', 'danger')
      return false;
    }
    if (!goodPassword(this.user.password)) {
      this.ux.showToastController(`password  must be eight characters or longer with number and alphabetical character`, 'danger')
      return false;
    }
    this.ux.showLoadingController();
    this.authService.signupUser(this.user).then(
      ({ data }: any) => {
        this.ux.hideLoadingController();
        this.ux.showToastController(data.message, 'success')
      }
      , ({ response }) => {
        const message = (response != undefined && response != null) ? response.data.message : "somthing wrong";
        this.ux.hideLoadingController();
        this.ux.showToastController(message, 'danger')
      });

  }

  sendpass() {
    if (!validateEmail(this.mail)) {
      this.ux.showToastController('You have entered an invalid email address!', 'danger')
      return false;
    }
    alert(" Send pass to email ")
  }


  async ionViewWillEnter() {
    this.ux.prepareLoadingController("Loading...");
  }


}


