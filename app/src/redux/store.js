import {combineReducers, applyMiddleware, createStore} from 'redux';
import driversRedusers from './driversReduser';
import reduxThunk from 'redux-thunk';

const redusers= combineReducers({
    driversPage:driversRedusers
})
const store = createStore(redusers)

export default store