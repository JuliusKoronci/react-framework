// @flow
import React, { PropTypes, Component } from 'react';

class Label extends Component {

  static displayName = 'Label';

  static defaultProps = {
    labelText : '',
    placeAfter: true,
  };

  static propTypes = {
    children  : PropTypes.node.isRequired,
    labelText : PropTypes.string.isRequired,
    placeAfter: PropTypes.bool,
  };

  render () {
    const { children, labelText, placeAfter, ...others } = this.props;
    return (
      <label {...others}>
				{!placeAfter && labelText}
        {children}
        {placeAfter && labelText}
			</label>
    );
  }
}

export default Label;
