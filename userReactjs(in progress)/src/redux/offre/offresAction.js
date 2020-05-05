import sendRequest from'../../services/sendrequest'
import auth from '../../services/auth'

import {
GET_OFFRES_BY_ID_BEGIN,
GET_OFFRES_BY_ID_SUCCESS,
GET_OFFRES_BY_ID_FAIL,
GET_OFFRES_BY_CAT_BEGIN,
GET_OFFRES_BY_CAT_SUCCESS,
GET_OFFRES_BY_CAT_FAIL ,
POSTULER_OFFRES_BEGIN,
POSTULER_OFFRES_SUCCESS,

POSTULER_OFFRES_FAIL

} from './offresTypes'


export const getOffreByCat=(id)=>dispatch=>{
  dispatch({
    type:GET_OFFRES_BY_CAT_BEGIN,
  })
  

  return sendRequest({

    method:'GET' ,
    url:`/api/offre/data/${id}`

  }).then(res=>{
    dispatch({
      type: GET_OFFRES_BY_CAT_SUCCESS,
      payload: res
   
 
  })

  })
      
    
   .catch(error=>{

    
    dispatch({
      type: GET_OFFRES_BY_CAT_FAIL,
      payload: {error}
    })

  })
}


export const getOffreById=(id)=>dispatch=>{
  dispatch({
    type:GET_OFFRES_BY_ID_BEGIN,
  })
  

  return sendRequest({

    method:'GET' ,
    url:`/api/offre/_data/${id}`

  }).then(res=>{
    dispatch({
      type: GET_OFFRES_BY_ID_SUCCESS,
      payload: res
   
 
  })

  })
      
    
   .catch(error=>{

    
    dispatch({
      type: GET_OFFRES_BY_ID_FAIL,
      payload: {error}
    })

  })
}



export const  postulerOffre=(id,idUser=auth.getUserId())=>dispatch=>{
  dispatch({
    type:POSTULER_OFFRES_BEGIN,
  })
  

  return sendRequest({

    method:'POST' ,
    url:`/api/offre/postuler/`,
    data:{id,idUser}

  }).then(res=>{
  //   dispatch({
  //     type: POSTULER_OFFRES_SUCCESS,
  //     payload: res
   
 
  // })
  alert("le Post postuler avec succes");

  })
      
    
   .catch(error=>{
alert(" vous avez deja postuler ce post ");
    
    // dispatch({
    //   type: POSTULER_OFFRES_FAIL  ,
    //   payload: {error}
    // })

  })
}
