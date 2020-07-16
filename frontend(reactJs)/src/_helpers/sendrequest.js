import axios from 'axios'
import Auth from './auth'
//https://github.com/axios/axios

const URL = 'http://localhost:3000'

const sendRequest = (config) => {
  config.baseURL = URL
  // get token from  Auth class   
  config.headers = {
    "authorization": Auth.getToken()
  }

  return new Promise((resolve, reject) => {

    axios(config).then((data) => {
      resolve(data)
    }).catch((e) => {
      console.log(e)
      if (e.response && (e.response.status === 500 || e.response.status === 401)) {
        Auth.clearAll() // logout if token not valid Or token expired

      }
      else {
       
          reject(e)
        
      }

    })


  })



}
export default sendRequest