// @flow
import React, { PropTypes, Component } from 'react';
import frameworkConfig from '../framework';

class ContextProvider extends Component {
	getChildContext() {
		return { IFConfig: frameworkConfig };
	}

	static childContextTypes = {
		IFConfig: PropTypes.object
	};

	render() {
		return this.props.children;
	}
}


export default ContextProvider;
