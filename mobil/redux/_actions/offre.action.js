import sendRequest from '../../_helpers/sendrequest'
import { offreConstants } from '../_constants/offre.constants'

export const _offreAction = {
    getOffreByCat,
    getOffreById

}

function getOffreByCat(catId) {

    return dispatch => {
        dispatch({
            type: offreConstants.GET_OFFRECAT_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/getoffrebycat/${catId}`
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

function getOffreById(id) {

    return dispatch => {
        dispatch({
            type: offreConstants.GET_OFFRE_BY_ID_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/getoffrebyid/${id}`
        }).then((offre) => {
            dispatch({
                type: offreConstants.GET_OFFRE_BY_ID_SUCCESS,
                offre
            })
        },
            () => {
                dispatch({
                    type: offreConstants.GET_OFFRE_BY_ID_FAILURE,
                    error: "somthing Wrong"
                })
            }
        )
    }
}
