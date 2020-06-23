import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(public route: Router) { }

  public logout(): void {
    if(confirm("are you sure "))
  {  localStorage.clear();
    this.route.navigateByUrl('login');
  
  }
  }

}
