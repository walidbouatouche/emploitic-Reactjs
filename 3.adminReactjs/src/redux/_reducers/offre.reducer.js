import { offreConstants } from '../_canstants/offres.constants'

export function offres(state = {}, action) {
    console.log(action);
    switch (action.type) {
        case offreConstants.GET_ALL_OFFRES_REQUEST:
            return {
                loading: true
            };

        case offreConstants.GET_ALL_OFFRES_SUCCESS:
            return {
                listoffres: action.offre.data
            }

        case offreConstants.GET_ALL_OFFRES_FAILURE:
            return {
                error: action.error
            }

        default:
            return state;
    }




}