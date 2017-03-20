// @flow
import { loginActions } from '../constants/LoginConstants';
import { CALL_API } from 'redux-api-middleware';

export const login = (username: string = '', password: string = '') => {
	const formData = new FormData();
	formData.append('email', username);
	formData.append('password', password);
	return {
		[CALL_API]: {
			endpoint: 'http://api.app/auth/login',
			method: 'POST',
			body: formData,
			types: [
				loginActions.LOGIN_REQUEST,
				loginActions.LOGIN_SUCCESS,
				loginActions.LOGIN_ERROR,
			]
		}
	}
};
