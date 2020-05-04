import sendRequest from'../../services/sendrequest'
import Auth from '../../services/auth'

import {
SINGUP_BEGIN,
SINGUP_SUCCESS,
SINGUP_FAIL,
LOGIN_BEGIN,
LOGIN_SUCCESS,
LOGIN_FAIL,
 
UPDATE_CV_FILE_BEGIN ,
UPDATE_CV_FILE_FAIL,
UPDATE_CV_FILE_SUCCESS,


GET_USER_BY_ID_BEGIN,
GET_USER_BY_ID_SUCCESS,
GET_USER_BY_ID_FAIL ,


UPDATE_USER_BEGIN,
UPDATE_USER_SUCCESS,
UPDATE_USER_FAIL,


} from './userTypes'

export const singup=(user)=>dispatch=>{

 
  dispatch({
    type:SINGUP_BEGIN,
  })
  

  return sendRequest({

    method:'POST' ,
    url:`/api/user/data/`,
    data:user

  }).then(res=>{
    dispatch({
      type: SINGUP_SUCCESS,
      payload: res
   
 
  })

  })
      
    
   .catch(error=>{

    
    dispatch({
      type: SINGUP_FAIL,
      payload: {error}
    })

  })
}



export const login=(user)=>dispatch=>{

 
  dispatch({
    type:LOGIN_BEGIN,
  })
  

  return sendRequest({

    method:'POST' ,
    url:`/api/user/_data/`,
    data:user

  }).then(res=>{
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res
   
 
  })

  })
      
    
   .catch(error=>{

    
    dispatch({
      type: LOGIN_FAIL,
      payload: {error}
    })

  })
}





export const updateCvFile=(formData)=>dispatch=>{

 
  dispatch({
    type:UPDATE_CV_FILE_BEGIN,
  })
  

  return sendRequest({

    method:'POST' ,
    url:`/api/upfile/`,
    data:formData

  }).then(res=>{
    dispatch({
      type: UPDATE_CV_FILE_SUCCESS,
      payload: res
   
 
  })

  })
      
    
   .catch(error=>{

    
    dispatch({
      type: UPDATE_CV_FILE_FAIL,
      payload: {error}
    })

  })
}




export const getUserByid=(id=Auth.getUserId())=>dispatch=>{

 
  dispatch({
    type:GET_USER_BY_ID_BEGIN ,
  })
  

  return sendRequest({

    method:'GET' ,
    url:`/api/user/data/${id}`,     

  }).then(res=>{
    dispatch({
      type:GET_USER_BY_ID_SUCCESS,
      payload: res
   
 
  })

  })
      
    
   .catch(error=>{

    
    dispatch({
      type:GET_USER_BY_ID_FAIL,
      payload: {error}
    })

  })
}







export const updateUser=(userData)=>dispatch=>{

 
  dispatch({
    type:UPDATE_USER_BEGIN,
  })
  

  return sendRequest({

    method:'PUT' ,
    url:`/api/user/_data/`,
    data:userData

  }).then(res=>{
    dispatch(getUserByid())

  })
      
    
   .catch(error=>{

    
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: {error}
    })

  })
}

