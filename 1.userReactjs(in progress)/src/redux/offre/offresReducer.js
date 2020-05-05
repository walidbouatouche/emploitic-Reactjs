import {

GET_OFFRES_BY_ID_BEGIN,
GET_OFFRES_BY_ID_SUCCESS,
GET_OFFRES_BY_ID_FAIL,
GET_OFFRES_BY_CAT_BEGIN,
GET_OFFRES_BY_CAT_SUCCESS,
GET_OFFRES_BY_CAT_FAIL ,
GET_MY_OFFRES_BEGIN,
GET_MY_OFFRES_SUCCESS,
GET_MY_OFFRES_FAIL
  } from './offresTypes'
  
  const initialState = {
    offres: null,
    loading: false,
    floading: false,
    error: null,
  }
  
  export default (state = initialState, action) => {
    console.log(action)
 
    switch (action.type) {
      case GET_OFFRES_BY_ID_BEGIN:
   
        return {
          ...state,
          loading: true,
          floading: false,
        
        }
      case GET_OFFRES_BY_ID_SUCCESS:
        
        return {
          ...state,
          loading: false,
          floading: true,
          offres: action.payload.data
        }
      case GET_OFFRES_BY_ID_FAIL:
      
        return {
          ...state,
          loading: false,
          floading: false,
          error: action.payload.error
        } 
        

        case GET_OFFRES_BY_CAT_BEGIN:
   
          return {
            ...state,
            loading: true,
            floading: false,
          
          }
        case GET_OFFRES_BY_CAT_SUCCESS:
          
          return {
            ...state,
            loading: false,
            floading: true,
            offres: action.payload.data
          }
        case GET_OFFRES_BY_CAT_FAIL:
        
          return {
            ...state,
            loading: false,
            floading: false,
            error: action.payload.error
          } 
          
          case GET_MY_OFFRES_BEGIN:
   
            return {
              ...state,
              loading: true,
              floading: false,
            
            }
          case GET_MY_OFFRES_SUCCESS:
            
            return {
              ...state,
              loading: false,
              floading: true,
              offres: action.payload.data
            }
          case  GET_MY_OFFRES_FAIL:
          
            return {
              ...state,
              loading: false,
              floading: false,
              error: action.payload.error
            } 
            

      default:
        return state
    }
  }
  