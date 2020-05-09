import {
  SINGUP_BEGIN,
  SINGUP_SUCCESS,
  SINGUP_FAIL,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_CV_FILE_BEGIN,
  UPDATE_CV_FILE_FAIL,
  UPDATE_CV_FILE_SUCCESS,
  GET_USER_BY_ID_BEGIN,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAIL,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from './userTypes'

const initialState = {
  user: null,
  loading: false,
  sucess: false,
  error: null,
}

export default (state = initialState, action) => {
  console.log(action)

  switch (action.type) {

    case SINGUP_BEGIN:
      return {
        ...state,
        loading: true,
        floading: false,
      }

    case SINGUP_SUCCESS:
      return {
        ...state,
        loading: false,
        floading: true,
        user: action.payload.data
      }

    case SINGUP_FAIL:
      return {
        ...state,
        loading: false,
        sucess: false,
        error: action.payload.error
      }

    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        floading: false,

      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        floading: true,
        user: action.payload.data
      }

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        sucess: false,
        error: action.payload.error
      }

    case UPDATE_CV_FILE_BEGIN:
      return {
        ...state,
        loading: true,
        floading: false,

      }

    case UPDATE_CV_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        floading: true,
        user: action.payload.data
      }

    case UPDATE_CV_FILE_FAIL:
      return {
        ...state,
        loading: false,
        sucess: false,
        error: action.payload.error
      }

    case GET_USER_BY_ID_BEGIN:
      return {
        ...state,
        loading: true,
        floading: false,

      }

    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        floading: true,
        user: action.payload.data
      }

    case GET_USER_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        sucess: false,
        error: action.payload.error
      }

    case UPDATE_USER_BEGIN:
      return {
        ...state,
        loading: true,
        floading: false,

      }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        floading: true,
        user: action.payload.data
      }

    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        sucess: false,
        error: action.payload.error
      }

    default:
      return state
  }
}
