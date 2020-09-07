import authReducer from './auth_reducer';
import  userReducer from './user_reducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
})

export default rootReducer;