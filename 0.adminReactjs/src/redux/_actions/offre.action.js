import sendRequest from '../../_helpers/sendrequest'
import { offreConstants } from '../_canstants/offres.constants'

export const _offreAction = {
    getAllOffres,
    removeOffre,
    getCatById ,
    getMoreOffre
}

function getAllOffres(query = 'a') { // search and get all   بحث و في نفس الوقت جلب كل البيانات
    return dispatch => {
        dispatch({
            type: offreConstants.GET_ALL_OFFRES_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/api/offre/offres_adminRoutes/` + query
        }).then(
            offre => {
                dispatch({
                    type: offreConstants.GET_ALL_OFFRES_SUCCESS,
                    offre
                })
            },
            error => {
                dispatch({
                    type: offreConstants.GET_ALL_OFFRES_FAILURE,
                    error: "somthing Wrong"
                })

            }

        )
    }
}


function removeOffre(id) {
    return dispatch => {
        dispatch({
            type: offreConstants.REMOVE_OFFRES_REQUEST
        })
        return sendRequest({
            method: 'DELETE',
            url: `/api/offre/_data/${id}`
        }).then(
            () => {
                dispatch({
                    type: offreConstants.REMOVE_OFFRES_SUCCESS,

                })
                dispatch(_offreAction.getAllOffres())
            },
            () => {
                dispatch({
                    type: offreConstants.REMOVE_OFFRES_FAILURE,
                    error: "somthing Wrong"
                })

            }

        )
    }
}


function getCatById(id) {
    return dispatch => {
        dispatch({
            type: offreConstants.GET_OFFRECAT_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/api/offre/data/${id}`
        }).then((offre) => {
            dispatch({
                type: offreConstants.GET_OFFRECAT_SUCCESS,
                offre
            })
        },
            () => {
                dispatch({
                    type: offreConstants.GET_OFFRECAT_FAILURE,
                    error: "somthing Wrong"
                })
            }
        )
    }
}


function getMoreOffre(limit) {
    return dispatch => {
        dispatch({
            type: offreConstants.GET_MORE_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/api/offre/getmoreoffres/${limit}`
        }).then((offre) => {
            dispatch({
                type: offreConstants.GET_MORE_SUCCESS,
                offre
            })
        },
            () => {
                dispatch({
                    type: offreConstants.GET_MORE_FAILURE,
                    error: "somthing Wrong"
                })
            }
        )
    }
}