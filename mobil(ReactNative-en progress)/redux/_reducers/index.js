import { combineReducers } from 'redux'
import { offres } from './offre.reducer'
import { user } from './user.reducer'

const rootReducer = combineReducers({
    offres,
    user
})


export default rootReducer 