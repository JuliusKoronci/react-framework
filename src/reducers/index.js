import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import LoginReducer from '../modules/Login/reducers/LoginReducer';

const rootReducer = combineReducers({
	login: LoginReducer,
	routing
});

export default rootReducer;
