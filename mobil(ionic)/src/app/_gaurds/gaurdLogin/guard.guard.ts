import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { AuthService } from '../../services/auth/auth.service'
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(public route: Router, public AuthService: AuthService) {

  }
  canActivate(): boolean {
    console.log(this.AuthService.isLogin());
    if (this.AuthService.isLogin() === true) {
      this.route.navigate(["/home"]);
      return false;
    }

    else {
      return true;
    }

  }

}