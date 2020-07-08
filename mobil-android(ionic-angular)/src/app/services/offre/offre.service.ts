import { Injectable } from '@angular/core';
import { SendRequestService } from '../../_helpers/sendRequest/send-request.service'

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(

    public sendRequestService: SendRequestService,
  ) {



  }


  getOffresByCat(catId) {
    const url = `/offre/getoffrebycat/${catId}`
    return this.sendRequestService.sendRequest(
      {
        method: 'GET',
        url: url
      })

  }

  getOffreById(offreId) {
    const url = `/offre/getoffrebyid/${offreId}` ;
    return this.sendRequestService.sendRequest(
      {
        method: 'GET',
        url: url
      })

  }
  postulerOffre (id, idUser) {
    const url = `/offre/postuleroffres/` ;
    return this.sendRequestService.sendRequest(
      {
        method: 'POST',
        url:url ,
        data: { id, idUser }
      })

  }

  getMyOffres(userId) {
 
    const url =`/offre/getmyoffre/${userId}` ;
    return this.sendRequestService.sendRequest(
      {
        method: 'GET',
        url: url
      })

  }

   
}
