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
    getOffreNumber,
    getNumberOffresByCat,
    getOffreByCatWithPagination,
    getOffreSame,
    fullSearchOffres ,
    getOffresByRecruiter
}

/*  
I do not use Arrow function because i put export in top  
jut for make the code more readable
 */


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



//  const  SEARCH_OFFRES_REQUEST  meant search and get all
function searchOffres(char = 'a') {
    return dispatch => {
        dispatch({
            type: offreConstants.SEARCH_OFFRES_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/searchoffre/` + char
        }).then(
            offre => {
                dispatch({
                    type: offreConstants.SEARCH_OFFRES_SUCCESS,
                    offre
                })
            },
            error => {
                dispatch({
                    type: offreConstants.SEARCH_OFFRES_FAILURE,
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
            {
                method: 'GET',
                url: '/offre/getoffrenumber'
            }

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



function getNumberOffresByCat(catId) {
    return dispatch => {

        dispatch({
            type: offreConstants.NBR_OFFRES_C_BEGIN

        })
        return sendRequest(
            {
                method: 'GET',
                url: '/offre/getoffrenumberbycat/' + catId
            }

        ).then(
            (nbr) => {
                dispatch({
                    type: offreConstants.NBR_OFFRES_C_SUCCESS,
                    nbr
                })
            },
            () => {
                dispatch({
                    type: offreConstants.NBR_OFFRES_C_FAIL,
                    error: "somthing Wrong"
                })
            }



        )


    }
}




function getOffreByCatWithPagination(skip, catId, limit) { // by limit

    const data = JSON.stringify({ catId, skip, limit })
    return dispatch => {
        dispatch({
            type: offreConstants.GET_OFFRES_PAGINATION_C_BEGIN
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/getOffrebycatwithpagination/${data}`
        }).then((offre) => {
            dispatch({
                type: offreConstants.GET_OFFRES_PAGINATION_C_SUCCESS,
                offre
            })
        },
            () => {
                dispatch({
                    type: offreConstants.GET_OFFRES_PAGINATION_C_FAIL,
                    error: "somthing Wrong"
                })
            }
        )
    }
}





function getOffreSame(idOffre) {

    return dispatch => {
        dispatch({
            type: offreConstants.GET_SAME_OFFRES_BEGIN
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/sameoffres/${idOffre}`
        }).then((offre) => {
            dispatch({
                type: offreConstants.GET_SAME_OFFRES_SUCCESS,
                offre
            })
        },
            () => {
                dispatch({
                    type: offreConstants.GET_SAME_OFFRES_FAIL,
                    error: "somthing Wrong"
                })
            }
        )
    }
}


function fullSearchOffres(char) {

    return dispatch => {
        dispatch({
            type: offreConstants.FUll_SEARCH_OFFRES_BEGIN
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/searchfull/${char}`
        }).then((offre) => {
            dispatch({
                type: offreConstants.FUll_SEARCH_OFFRES_SUCCESS,
                offre
            })
        },
            () => {
                dispatch({
                    type: offreConstants.FUll_SEARCH_OFFRES_FAIL,
                    error: "somthing Wrong"
                })
            }
        )
    }
}




function getOffresByRecruiter(idR) {

    return dispatch => {
        dispatch({
            type: offreConstants.GET_OFFRES_BY_R_BEGIN
        })
        return sendRequest({
            method: 'GET',
            url: `/offre/getoffresbyrecruiter/${idR}`
        }).then((offre) => {
            dispatch({
                type: offreConstants.GET_OFFRES_BY_R_SUCCESS,
                offre
            })
        },
            () => {
                dispatch({
                    type: offreConstants.GET_OFFRES_BY_R_FAIL,
                    error: "somthing Wrong"
                })
            }
        )
    }
}
