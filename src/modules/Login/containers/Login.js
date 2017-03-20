// @flow
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/LoginForm';
import { login } from '../actions/LoginActions';

class Login extends Component {
	static defaultProps = {};
	static propTypes = {};

	state = {
		form: {
			username: '',
			password: '',
		},
	};

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.form !== nextState.form) {
			return false;
		}
		return true;
	}

	_onSubmit = (e: InputEvent) => {
		e.preventDefault();
		this.props.login(this.state.form.username, this.state.form.password);
	};

	_onValueReturned = (field, value) => {
		const form = this.state.form;
		this.setState(
			{
				form: Object.assign({}, form, { [field]: value }),
			}
		);
	};

	render() {
		return (
			<LoginForm formValues={this.state.form} onSubmit={this._onSubmit} returnValue={this._onValueReturned} />);
	}
}

const _mapStoreToProps = (state) => {
	return { state };
};
const _mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ login }, dispatch);
};

export default connect(_mapStoreToProps, _mapDispatchToProps)(Login);

