import { userConstants } from '../_canstants/user.constants'


export function user(state = {}, action) {
    console.log(action)
    switch (action.type) {
        case userConstants.USER_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true
            };

        case userConstants.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false
            }

        case userConstants.USER_SIGNUP_FAILURE:
            return {
                error: action.error,
                loading: false
            }
        case userConstants.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };

        case userConstants.USER_LOGIN_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false,
                userData: action.user.data
            }

        case userConstants.USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }


        case userConstants.UPDATE_CV_FILE_BEGIN:
            return {
                ...state,
                loading: true,

            }

        case userConstants.UPDATE_CV_FILE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.data
            }

        case userConstants.UPDATE_CV_FILE_FAIL:
            return {
                ...state,
                loading: false,

                error: action.error
            }

        case userConstants.GET_USER_BY_ID_BEGIN:
            return {
                ...state,
                loading: true,
            }

        case userConstants.GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user.data
            }

        case userConstants.GET_USER_BY_ID_FAIL:
            return {
                ...state,
                loading: false,

                error: action.error
            }

        case userConstants.UPDATE_USER_BEGIN:
            return {
                ...state,
                loading: true,


            }

        case userConstants.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                sucess: true,
            }

        case userConstants.UPDATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case userConstants.GET_USERS_BY_OFFRE_BEGIN:
            return {
                ...state,
                loading: true,

            }

        case userConstants.GET_USERS_BY_OFFRE_SUCCESS:
            return {
                ...state,
                loading: false,
                usersByOffre: action.user.data
            }

        case userConstants.GET_USERS_BY_OFFRE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case userConstants.GET_USER_BY_R_REQUEST:
            return {
                ...state,
                loading: true,

            }

        case userConstants.GET_USER_BY_R_SUCCESS:
            return {
                ...state,
                loading: false,
                userByR: action.user.data
            }

        case userConstants.GET_USER_BY_R_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }


        default:
            return state;
    }




}