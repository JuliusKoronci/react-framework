// @flow
import React, { PropTypes, Component } from 'react';
import { Icon, TextElement } from '../../';

class Link extends Component {
  static defaultProps = {
    iconName: false,
    path    : false,
  };
  static propTypes    = {
    children: PropTypes.node.isRequired,
    iconName: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]),
    path    : PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]),
  };

  state = {};

  render () {
    const { children, iconName, path, ...others } = this.props;
    return (
      <a href={path || 'javascript:void(0)'} {...others}>
        {iconName && <Icon className={iconName} />}
        <TextElement type="span">{children}</TextElement>
      </a>
    );
  }
}

export default Link;
