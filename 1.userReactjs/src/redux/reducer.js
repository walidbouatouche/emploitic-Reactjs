import { combineReducers } from 'redux'

import offre from './offre/offresReducer'
import user from './user/userReducer'
export default combineReducers({
    offre,
    user
})