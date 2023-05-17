import { combineReducers } from 'redux'
import { mobileListReducer } from '../Component/maincomponent/Mobiless/Reduxx/MobileReducer';
import { authenticationReducer } from './Auth/AuthReducer'


export const rootReducer = combineReducers({
    authentication: authenticationReducer,
    mobileList:mobileListReducer,
    // Add other reducers here if needed
  });