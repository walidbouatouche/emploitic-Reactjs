
import axios from 'axios'


const URL = 'http://localhost:3000'

const sendRequest  = (config) => {
    config.baseURL = URL
    // if (localStorage.getItem("Auth")) {
    //   const token = JSON.parse(localStorage.getItem("Auth")).token
    //   config.headers = {
    //     "authorization": token
    //   }
    // }
// console.log(localStorage.getItem("Auth"));

  return axios(config)
}
export default sendRequest