import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SendRequestService } from '../../_helpers/sendRequest/send-request.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public sendRequestService: SendRequestService, public route: Router) { }

  signupUser(data) {
    const url = `/user/signup/`
    return this.sendRequestService.sendRequest({
      method: 'POST',
      url: url,
      data: { data }
    })

  }
  loginUser(data) {
    const url = `/user/login/`
    return this.sendRequestService.sendRequest({
      method: 'POST',
      url: url,
      data: { data }
    })

  }


  public isLogin(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }


  setToken(token) {
    localStorage.setItem('token', token);

  }
  setUserId(userId) {
    localStorage.setItem('userId', userId);
    this.route.navigateByUrl('home');
  }

  updateCvFile(formData) {
    return this.sendRequestService.sendRequest({
      method: 'PUT',
      url: `/user/upcvfile`,
      data: formData

    })
  }



  getUserByid(id) {
    const url = `/user/getuserbyid/${id}`
    return this.sendRequestService.sendRequest({
      method: 'GET',
      url: url,

    })
  }



  updateUser(userData) {

    return this.sendRequestService.sendRequest(
      {
        method: 'PUT',
        url: `/user/updateuser/`,
        data: userData

      }
    )
  }

  getPdf() {
    return this.sendRequestService.sendRequest(
      {
        method: 'GET',
        url: `/user/cv/`,
        responseType: 'blob',

      }
    )
  }

}











