import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service'
@Injectable({
  providedIn: 'root'
})
export class GuardPagesGuard implements CanActivate {
  constructor(public route: Router, public AuthService: AuthService) {

  }
  canActivate(): boolean {
    if (this.AuthService.isLogin() === true) {
      return true;
    }

    else {
      this.route.navigate(["/login"]);
      return false;
    }

  }

}
