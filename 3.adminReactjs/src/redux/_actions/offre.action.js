import sendRequest from '../../_helpers/sendrequest'
import { offreConstants } from '../_canstants/offres.constants'

export const offreAction = {
    getAllOffres,
}

function getAllOffres() {
    dispatch({
        tyoe: offreConstants.GET_ALL_OFFRES_REQUEST

    })
    return sendRequest({
        method: 'GET',
        url: `/api/offre/data/`
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
                error

            })

        }

    )
}