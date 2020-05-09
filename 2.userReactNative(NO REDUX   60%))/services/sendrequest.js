function sendRequest(path,method,data){
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