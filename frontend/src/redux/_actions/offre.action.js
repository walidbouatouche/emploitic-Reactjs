import sendRequest from '../../_helpers/sendrequest'
import { offreConstants } from '../_canstants/offres.constants'

export const _offreAction = {
    searchOffres,
    removeOffre,
    getCatById,
    getMoreOffre,
    addOffre,
    updateOffre,
    getOffreById,
    postulerOffre,
    getMyOffre,
    getOffreNumber
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




function searchOffres(char = 'a') {
    return dispatch => {
        dispatch({
            type: offreConstants.GET_ALL_OFFRES_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/searchoffre/` + char
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
            url: `/offre/deleteoffrebyid/${id}`
        }).then(
            () => {
                dispatch({
                    type: offreConstants.REMOVE_OFFRES_SUCCESS,

                })
                //  update direct the data in UI  when delete
                dispatch(_offreAction.getMoreOffre())
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


function getCatById(catId) {
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


function getMoreOffre(limit = 4) { // by limit
    return dispatch => {
        dispatch({
            type: offreConstants.GET_MORE_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/getoffrebylimit/${limit}`
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



function addOffre(data) {
    console.log(data)
    return dispatch => {
        dispatch({
            type: offreConstants.ADD_OFFRE_REQUEST
        })
        return sendRequest({
            method: 'POST',
            url: `/offre/addoffre/`,
            data: { data }
        }).then(() => {
            dispatch({
                type: offreConstants.ADD_OFFRE_SUCCESS,
            })
            //  update direct the data in UI  when add

            dispatch(_offreAction.getMoreOffre())
        },
            () => {
                dispatch({
                    type: offreConstants.ADD_OFFRE_FAILURE,
                    error: "somthing Wrong"
                })
            }
        )
    }
}


function updateOffre(data) {
    return dispatch => {

        dispatch({
            type: offreConstants.UPDATE_OFFRE_REQUEST
        })
        return sendRequest({
            method: 'PUT',
            url: '/offre/updateoffre/',
            data: { data }

        }).then(
            () => {
                dispatch(
                    {
                        type: offreConstants.UPDATE_OFFRE_SUCCESS
                    })

                //  update direct the data in UI  when update

                dispatch(_offreAction.getMoreOffre())
            }
            ,
            () => {
                dispatch({
                    type: offreConstants.UPDATE_OFFRE_FAILURE,
                    error: "something wrong"
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

        }
            ,

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


function getMyOffre(id) {

    return dispatch => {
        dispatch({
            type: offreConstants.GET_MY_OFFRES_BEGIN
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/getmyoffre/${id}`
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


function getOffreNumber() {
    return dispatch => {

        dispatch({
            type: offreConstants.NBR_OFFRES_BEGIN

        })
        return sendRequest(
   {         method: 'GET',
            url:'/offre/getoffrenumber' }

        ).then(
            (nbr) => {
                dispatch({
                    type: offreConstants.NBR_OFFRES_SUCCESS,
                    nbr
                })
            },
            () => {
                dispatch({
                    type: offreConstants.NBR_OFFRES_FAIL,
                    error: "somthing Wrong"
                })
            }



        )


    }
}