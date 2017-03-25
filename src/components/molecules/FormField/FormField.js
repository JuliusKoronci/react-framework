// @flow
import React, { PropTypes, Component } from 'react';
import { logException } from '../../../framework/Sentry';

class FormField extends Component {

	static displayName = 'LocalStateField';

	static defaultProps = {
		value: '',
		returnValue: () => logException('Implement returnValue of LocalStateWrapper', this, 'error'),
		shouldReturnValue: true,
		validateOnChange: false,
		validateOnBlur: false,
	};

	static propTypes = {
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		WrappedNode: PropTypes.func.isRequired,
		returnValue: PropTypes.func.isRequired,
		shouldReturnValue: PropTypes.bool.isRequired,
		validate: PropTypes.func,
		validateOnChange: PropTypes.bool,
		validateOnBlur: PropTypes.bool,
	};

	constructor(props: Object, context: Object) {
		super(props, context);
		this.state = {
			localValue: props.value,
		};
	}

	componentWillReceiveProps(nextProps: Object) {
		if (this.props.shouldReturnValue !== nextProps.shouldReturnValue) {
			if (this.props.validate) {
				this.props.validate(this.state.localValue);
			}
			this.props.returnValue(this.state.localValue);
		}
	}

	state: {
		localValue: number|string
	};

	_getClearedProps = (props: Object) => {
		const keys = Object.keys(FormField.propTypes);
		const propsToClear = ['onChange', 'onBlur'];
		keys.forEach((elem) => {
			delete  props[elem];
		});
		propsToClear.forEach((elem) => {
			delete  props[elem];
		});

		return props;
	};

	_handleChange = (e: InputEvent) => {
		const value = e.target.value;
		this.setState({ localValue: value });

		if (this.props.validate && this.props.validateOnChange) {
			this.props.validate(this.state.localValue);
		}
		if (this.props.shouldReturnValue) {
			this.props.returnValue(this.state.localValue);
		}
	};

	_handleBlur = () => {
		if (this.props.validate && this.props.validateOnBlur) {
			this.props.validate(this.state.localValue);
		}
		this.props.returnValue(this.state.localValue);
	};

	_getWrappedNode = () => {
		const { WrappedNode, ...others } = this.props;
		return (
			<WrappedNode
				onBlur={this._handleBlur}
				value={this.state.localValue}
				onChange={this._handleChange}
				{...this._getClearedProps(others)}
			/>
		);
	};

	render() {
		return (
			<div>{this._getWrappedNode(this.state.localValue)}</div>
		);
	}
}

export default FormField;
