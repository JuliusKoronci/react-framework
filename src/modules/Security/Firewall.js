// @flow
import React, { PropTypes, Component } from 'react';
import Storage, { types } from '../../framework/Storage';
import { connect } from 'react-redux';
import { security } from '../../framework';
import NotAuthenticated from './components/NotAuthenticated';
import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';
import toastr from 'toastr';

class Firewall extends Component {
	static defaultProps = {};
	static propTypes = {};
	static contextTypes = {
		IFConfig: PropTypes.object
	};

	constructor(props, context) {
		super(props, context);

		this.state = {};
		this.storage = new Storage(types.session);
	}

	componentWillMount() {
		if (!this._isAuthenticated()) {
			if (security.message) {
				toastr.error(security.message);
			}
			if (security.redirect) {
				browserHistory.push(security.redirect);
			}
		}
	}

	/**
	 * If token is present return true
	 *
	 * @returns {boolean}
	 * @private
	 */
	_isAuthenticated = () => {
		if (this._getToken()) {
			return true;
		}
		return false;
	};

	/**
	 * Checks for token in store, if not found checks storage
	 * @returns token
	 * @private
	 */
	_getToken = () => {
		const token = this.props.auth.token || this.storage.load(security.token);
		if (security.validateJWT) {
			return this._isTokenValid(token);
		}

		return token;
	};
	/**
	 * If token is valid, return it otherwise return false
	 * @return true|false
	 * @param token
	 * @private
	 */
	_isTokenValid = (token: string) => {
		const decoded = jwtDecode(token);
		if (decoded) {
			const time = new Date().getTime();
			if (decoded.exp * 1000 < time) {
				return false;
			}
			return token;
		}

		return false;
	};

	_notAuthenticated = () => {
		return <NotAuthenticated />;
	};

	render() {
		return this._isAuthenticated() && this.props.children || this._notAuthenticated();
	}
}


const _mapStoreToProps = (state) => {
	return { auth: state.login };
};

export default connect(_mapStoreToProps, null)(Firewall);
