import { offreConstants } from '../_canstants/offres.constants'

export function offres(state = {}, action) {
    console.log(state)
    switch (action.type) {
        case offreConstants.GET_ALL_OFFRES_REQUEST:
            return {
                ...state,
                loading: true
            };

        case offreConstants.GET_ALL_OFFRES_SUCCESS:
            return {
                ...state,
                listoffres: action.offre.data,
                loading: false
            }

        case offreConstants.GET_ALL_OFFRES_FAILURE:
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
                ...state ,
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
                loading: true
            };

        case offreConstants.POSTULER_OFFRES_SUCCESS:
            return {
                succes: true
            }

        case offreConstants.POSTULER_OFFRES_FAIL:
            return {
                error: action.error
            }


        case offreConstants.GET_MY_OFFRES_BEGIN:
            return {

                loading: true,

            }
        case offreConstants.GET_MY_OFFRES_SUCCESS:
            return {

                offres: action.offre.data
            }
        case offreConstants.GET_MY_OFFRES_FAIL:
            return {

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


        default:
            return state;
    }




}