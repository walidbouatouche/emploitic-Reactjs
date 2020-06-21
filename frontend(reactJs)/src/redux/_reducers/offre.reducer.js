import { offreConstants } from '../_canstants/offres.constants'

export function offres(state = {}, action) {
    console.log(state)
    switch (action.type) {
        case offreConstants.SEARCH_OFFRES_REQUEST:
            return {
                ...state,
                loading: true
            };

        case offreConstants.SEARCH_OFFRES_SUCCESS:
            return {
                ...state,
                listoffres: action.offre.data,
                loading: false
            }

        case offreConstants.SEARCH_OFFRES_FAILURE:
            return {
                error: action.error
            }
        case offreConstants.REMOVE_OFFRES_REQUEST:
            return {
                ...state,
                loading: true
            };

        case offreConstants.REMOVE_OFFRES_SUCCESS:
            const newNbr = state['nbr'] - 1;
            return {
                ...state,
                loading: false,
                nbr: newNbr
            }
        case offreConstants.REMOVE_OFFRES_FAILURE:
            return {
                error: action.error
            }
        case offreConstants.GET_OFFRECAT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case offreConstants.GET_OFFRECAT_SUCCESS:
            return {
                ...state,
                loading: false,
                listoffres: action.offre.data,
            }

        case offreConstants.GET_OFFRECAT_FAILURE:
            return {
                error: action.error
            }

        case offreConstants.GET_MORE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case offreConstants.GET_MORE_SUCCESS:
            return {
                ...state,
                listoffres: action.offre.data,
                loading: false
            }

        case offreConstants.GET_MORE_FAILURE:
            return {
                error: action.error
            }
        case offreConstants.ADD_OFFRE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case offreConstants.ADD_OFFRE_SUCCESS:
            const _newNbr = state['nbr'] + 1;

            return {
                ...state,
                loading: false,
                nbr: _newNbr
            }

        case offreConstants.UPDATE_OFFRE_FAILURE:
            return {

                error: action.error
            }
        case offreConstants.UPDATE_OFFRE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case offreConstants.UPDATE_OFFRE_SUCCESS:
            return {
                ...state,
                loading: false,

            }

        case offreConstants.UPDATE_OFFRE_FAILURE:
            return {
                error: action.error
            }

        case offreConstants.GET_OFFRE_BY_ID_REQUEST:
            return {
                loading: true
            };

        case offreConstants.GET_OFFRE_BY_ID_SUCCESS:
            return {
                offredetail: action.offre.data
            }

        case offreConstants.GET_OFFRE_BY_ID_FAILURE:
            return {
                error: action.error
            }

        case offreConstants.POSTULER_OFFRES_BEGIN:
            return {
                ...state,
                loading: true
            };

        case offreConstants.POSTULER_OFFRES_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false
            }

        case offreConstants.POSTULER_OFFRES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case offreConstants.GET_MY_OFFRES_BEGIN:
            return {
                ...state,
                loading: true,
            }
        case offreConstants.GET_MY_OFFRES_SUCCESS:
            return {
                ...state,
                offres: action.offre.data
            }
        case offreConstants.GET_MY_OFFRES_FAIL:
            return {
                ...state,
                error: action.error
            }
        case offreConstants.NBR_OFFRES_BEGIN:
            return {

                //  loading: true,
            }
        case offreConstants.NBR_OFFRES_SUCCESS:
            // index 0
            return {
                ...state,
                nbr: action.nbr.data[0]['count(*)']
            }
        case offreConstants.NBR_OFFRES_FAIL:
            return {
                error: action.error
            }

        case offreConstants.GET_OFFRES_PAGINATION_C_BEGIN:
            return {
                ...state,
                offreByPgn: [{}],
                loading: true
            }
        case offreConstants.GET_OFFRES_PAGINATION_C_SUCCESS:
            return {
                ...state,
                loading: false,
                offreByPgn: action.offre.data
            }
        case offreConstants.GET_OFFRES_PAGINATION_C_SUCCESS:
            return {
                ...state,
                error: action.error
            }
        case offreConstants.NBR_OFFRES_C_BEGIN:
            return {
                ...state,
                loading: true
            }
        case offreConstants.NBR_OFFRES_C_SUCCESS:
            // index 0
            return {
                ...state,
                loading: false,
                nbrPgn: action.nbr.data[0]['count(*)']
            }
        case offreConstants.NBR_OFFRES_C_FAIL:
            return {
                error: action.error
            }

        default:
            return state;
    }




}