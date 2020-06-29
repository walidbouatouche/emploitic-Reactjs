import sendRequest from '../../_helpers/sendrequest'
import { offreConstants } from '../_constants/offre.constants'

export const _offreAction = {
    getOffreByCat,
    getOffreById,
    getMyOffre,
    postulerOffre

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

function getMyOffre(idUser) {
    // id is iduser
    return dispatch => {
        dispatch({
            type: offreConstants.GET_MY_OFFRES_BEGIN
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/getmyoffre/${idUser}`
        }).then((offre) => {
            dispatch({
                type: offreConstants.GET_MY_OFFRES_SUCCESS,
                offre
            })
        },
            () => {
                dispatch({
                    type: offreConstants.GET_MY_OFFRES_FAIL,
                    error: "somthing Wrong"
                })
            }
        )
    }
}


function postulerOffre(id, idUser) {
    return dispatch => {
        dispatch({
            type: offreConstants.POSTULER_OFFRES_BEGIN,
        })
        return sendRequest({
            method: 'POST',
            url: `/offre/postuleroffres/`,
            data: { id, idUser }
        }).then(res => {
            dispatch({
                type: offreConstants.POSTULER_OFFRES_SUCCESS,

            })

        },
            /*
              * get response  by destruct from recive errer 
              *  and check if true and show error to user
              *   if not true that mean  undefeinded  error
                            */
            ({ response }) => {
                dispatch({
                    type: offreConstants.POSTULER_OFFRES_FAIL,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

                })

            })
    }

}

