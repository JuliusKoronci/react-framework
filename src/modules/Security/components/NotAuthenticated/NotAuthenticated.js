// @flow
import React, { PropTypes, Component } from 'react';

class NotAuthenticated extends Component {
	static defaultProps = {};
	static propTypes = {};

	state = {};

	render() {
		return (<div>You are not permitted to access this page! Try to login! </div>);
	}
}


export default NotAuthenticated;

