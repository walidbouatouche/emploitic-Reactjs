import { Injectable } from '@angular/core';
import loginInfo from '../../_helpers/userifos/login-infos'
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})

export class SendRequestService {
 
   //urlBase = 'http://localhost:3000/';
 urlBase = 'https://gentle-ridge-67558.herokuapp.com';

 

  constructor() {
  }


  sendRequest = (config) => {
    config.baseURL = this.urlBase
    // get token from  Auth class   
    config.headers = {
      "authorization": loginInfo.getToken()
    }

    return new Promise((resolve, reject) => {

      axios(config).then((data) => {
        resolve(data)
      }).catch((e) => {
        console.log(e)
        if (e.response && (e.response.status === 500 || e.response.status === 401)) {
          // logout() // logout if token not valid Or token expired

        }
        else {
          if (e.response) {
            reject(e)
          }
          else {


          }

        }

      })


    })



  }
}
