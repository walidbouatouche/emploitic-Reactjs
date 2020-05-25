import { userConstants } from '../_canstants/user.constants'

export function user(state = {}, action) {
    console.log(action);
    switch (action.type) {
        case userConstants.USER_SIGNUP_REQUEST:
            return {
                loading: true
            };

        case userConstants.USER_SIGNUP_SUCCESS:
            return {
                succes: true
            }

        case userConstants.USER_SIGNUP_FAILURE:
            return {
                error: action.error
            }
        case userConstants.USER_LOGIN_REQUEST:
            return {
                loading: true
            };

        case userConstants.USER_LOGIN_SUCCESS:
            return {
                userData: action.user.data
            }

        case userConstants.USER_LOGIN_FAILURE:
            return {
                error: action.error
            }


        case userConstants.UPDATE_CV_FILE_BEGIN:
            return {

                loading: true,


            }

        case userConstants.UPDATE_CV_FILE_SUCCESS:
            return {

                user: action.data
            }

        case userConstants.UPDATE_CV_FILE_FAIL:
            return {

                error: action.error
            }

        case userConstants.GET_USER_BY_ID_BEGIN:
            return {

                loading: true,

            }

        case userConstants.GET_USER_BY_ID_SUCCESS:
            return {


                user: action.user.data
            }

        case userConstants.GET_USER_BY_ID_FAIL:
            return {


                error: action.error
            }

        case userConstants.UPDATE_USER_BEGIN:
            return {

                loading: true,


            }

        case userConstants.UPDATE_USER_SUCCESS:
            return {
                sucess: true,
            }

        case userConstants.UPDATE_USER_FAIL:
            return {

                error: action.error
            }

        case userConstants.GET_USERS_BY_OFFRE_BEGIN:
            return {

                loading: true,


            }

        case userConstants.GET_USERS_BY_OFFRE_SUCCESS:
            return {

                usersByOffre:action.user.data
            }

        case userConstants.GET_USERS_BY_OFFRE_FAIL:
            return {

                error: action.error
            }
        default:
            return state;
    }




}