// @flow
import React, { PropTypes, Component } from 'react';

class Firewall extends Component {
	static defaultProps = {};
	static propTypes = {};
	static contextTypes = {
		IFConfig: PropTypes.object
	};
	state = {};

	render() {
		return this.props.children;
	}
}


export default Firewall;
