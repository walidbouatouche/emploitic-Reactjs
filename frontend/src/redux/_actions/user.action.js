import sendRequest from '../../_helpers/sendrequest'
import { userConstants } from '../_canstants/user.constants'


export const _userAction = {
    signup,
    login,
    updateCvFile,
    updateUser,
    getUserByid,
    getUsersByOffre
}



function signup(data) {


    return dispatch => {
        dispatch({
            type: userConstants.USER_SIGNUP_REQUEST
        })
        return sendRequest({
            method: 'POST',
            url: `/user/signup/`,
            data: { data }
        }).then(() => {
            dispatch({
                type: userConstants.USER_SIGNUP_SUCCESS,

            })

        },
            ({ response }) => {
                dispatch({
                    type: userConstants.USER_SIGNUP_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}

function login(data) {


    return dispatch => {
        dispatch({
            type: userConstants.USER_LOGIN_REQUEST
        })
        return sendRequest({
            method: 'POST',
            url: `/user/login/`,
            data: { data }
        }).then((user) => {
            dispatch({
                type: userConstants.USER_LOGIN_SUCCESS,
                user
            })

        },
            ({ response }) => {
                dispatch({
                    type: userConstants.USER_LOGIN_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}






function updateCvFile(formData, id) {
    return dispatch => {
        dispatch({
            type: userConstants.UPDATE_CV_FILE_BEGIN,
        })
        return sendRequest({
            method: 'PUT',
            url: `/user/upcvfile/`,
            data: formData

        }).then(() => {
            dispatch(getUserByid(id))
        },
            ({ response }) => {
                dispatch({
                    type: userConstants.UPDATE_CV_FILE_FAIL,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

                })
            })
    }
}

function getUserByid(id) {
    return dispatch => {
        dispatch({
            type: userConstants.GET_USER_BY_ID_BEGIN,
        })

        return sendRequest({
            method: 'GET',
            url: `/user/getuserbyid/${id}`,

        }).then(user => {
            dispatch({
                type: userConstants.GET_USER_BY_ID_SUCCESS,
                user
            })

        }, ({ response }) => {
            dispatch({
                type: userConstants.GET_USER_BY_ID_FAIL,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}


function updateUser(userData) {
    return dispatch => {

        dispatch({
            type: userConstants.UPDATE_USER_BEGIN,
        })
        return sendRequest({
            method: 'PUT',
            url: `/user/updateuser/`,
            data: userData

        }).then(() => {
            dispatch(getUserByid(userData.userId))
        },
            ({ response }) => {
                dispatch({
                    type: userConstants.UPDATE_USER_FAIL,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

                })

            })
    }
}
function getUsersByOffre(idOffre) {
    return dispatch => {
        dispatch({
            type: userConstants.GET_USERS_BY_OFFRE_BEGIN,
        })

        return sendRequest({
            method: 'GET',
            url: `/user/getusersbyoffre/${idOffre}`,

        }).then(user => {
            dispatch({
                type: userConstants.GET_USERS_BY_OFFRE_SUCCESS,
                user
            })

        }, ({ response }) => {
            dispatch({
                type: userConstants.GET_USERS_BY_OFFRE_FAIL,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}