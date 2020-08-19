import { Injectable } from '@angular/core';
import loginInfo from '../../_helpers/userifos/login-infos'
import { LogoutService } from '../../_helpers/logout/logout.service'
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})

export class SendRequestService {

  urlBase = 'http://localhost:3000/';


  constructor(public logout: LogoutService) {
  }


  sendRequest = (config) => {

    try {

      config.baseURL = this.urlBase
      // get token from  Auth class   
      config.headers = {
        "authorization": loginInfo.getToken()
      }

      return new Promise((resolve, reject) => {

        axios(config).then((data) => {
          resolve(data)
        }).catch((e) => {

          if (e.response && (e.response.status === 500 || e.response.status === 401)) {
            this.logout.logout()// logout if token not valid Or token expired

          }
          else {

            reject(e)

          }

        })


      })
    } catch{


      alert("Errer Connection")
    }


  }
}
