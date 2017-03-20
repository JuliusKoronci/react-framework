// @flow
import React, { PropTypes, Component } from 'react';

class FormFieldWithValidation extends Component {

  static displayName  = 'LocalStateField';
  static defaultProps = {
    hasError    : false,
    errorMessage: '',
    className   : '',
    errorClass  : 'error',
    placeBefore : false,
  };
  static propTypes    = {
    children    : PropTypes.node.isRequired,
    placeBefore : PropTypes.bool,
    hasError    : PropTypes.bool,
    errorMessage: PropTypes.string,
    className   : PropTypes.string,
    errorClass  : PropTypes.string,
  };

  state: {
    localValue: number|string
  };
  _renderError  = () => {
    const { errorMessage, className } = this.props;
    if (errorMessage != '') {
      return (<small className={className}>{errorMessage}</small>);
    }

    return null;
  };
  _getClassName = () => {
    let name = this.props.className;
    if (this.props.hasError) {
      name += this.props.errorClass;
    }

    return name;
  };

  render () {
    const { hasError, placeBefore, ...others } = this.props;
    delete others.errorClass;
    delete others.errorMessage;
    return (
      <div className={this._getClassName()} {...others}>
        {placeBefore && hasError && this._renderError()}
        {this.props.children}
        {!placeBefore && hasError && this._renderError()}
      </div>
    );
  }
}

export default FormFieldWithValidation;
