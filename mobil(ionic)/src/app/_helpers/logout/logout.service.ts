import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UxService } from '../../services/ux/ux.service'
@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(public ux: UxService, public route: Router) { }

  public logout(): void {

    this.ux.showLoadingController()
    localStorage.clear();
    this.route.navigateByUrl('login');
    this.ux.hideLoadingController()

  }

}
