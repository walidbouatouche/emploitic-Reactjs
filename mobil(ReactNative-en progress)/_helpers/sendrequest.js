import axios from 'axios'

//https://github.com/axios/axios
const URL = 'http://localhost:3000'
const sendRequest = (config) => {
    config.baseURL = URL
      // get token from  Auth class   
      config.headers = {
        "authorization": Auth.getToken()
      }

    return axios(config)
}
export default sendRequest