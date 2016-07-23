import { combineReducers } from 'redux'
import page from './modules/page'
import user from './modules/user'

export default combineReducers({
    page,
    user
})