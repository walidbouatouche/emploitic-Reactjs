function sendRequest(path,method,data){   //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  if(data===false){
    return fetch('http://localhost:3000'+path, {
      method: method,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }
 
      })

  }
  else{


  return fetch('http://localhost:3000'+path, {
    method: method,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
    body: data
    })
  }
}
export default sendRequest