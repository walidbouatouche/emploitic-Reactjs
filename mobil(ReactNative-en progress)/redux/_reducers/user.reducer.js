import { userConstants } from '../_constants/user.constants'


export function user(state = {}, action) {

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


        default:
            return state;
    }




}