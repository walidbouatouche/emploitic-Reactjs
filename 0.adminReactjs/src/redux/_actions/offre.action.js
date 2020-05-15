import sendRequest from '../../_helpers/sendrequest'
import { offreConstants } from '../_canstants/offres.constants'

export const _offreAction = {
    getAllOffres,
    removeOffre
}

function getAllOffres(query='a') {
    return dispatch => {
        dispatch({
            type: offreConstants.GET_ALL_OFFRES_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/api/offre/offres_adminRoutes/`+query
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
                dispatch({type:offreConstants.REMOVE_OFFRES_SUCCESS})
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

