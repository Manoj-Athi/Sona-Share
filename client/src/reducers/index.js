import { combineReducers } from "redux"
import authReducer from "./auth"
import currentUserReducer from "./currentUser"
import discussionsReducer from './discussions'

export default combineReducers({
    authReducer, currentUserReducer, discussionsReducer
})
