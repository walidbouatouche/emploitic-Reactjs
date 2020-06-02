import { offreConstants } from '../_constants/offre.constants'

export function offres(state = {}, action) {
    console.log(action)
    switch (action.type) {
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
        case offreConstants.GET_OFFRE_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            };

        case offreConstants.GET_OFFRE_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                offredetail: action.offre.data
            }

        case offreConstants.GET_OFFRE_BY_ID_FAILURE:
            return {
                ...state,
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
        default:
            return state;
    }




}