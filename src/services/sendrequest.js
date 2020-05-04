
import axios from 'axios'


const URL = 'http://localhost:3000'

const sendRequest  = (config) => {
    config.baseURL = URL
    // if (localStorage.getItem("token")) {
    //   const token = JSON.parse(localStorage.getItem("token"))    //   config.headers = {
    //     "authorization": token
    //   }
    // }
// console.log(localStorage.getItem("Auth"));

  return axios(config)
}
export default sendRequest