// @flow
import React, { PropTypes, Component } from 'react';
import Link from '../Link';

class DropDown extends Component {
  static defaultProps = {
    toggleName : '',
    iconName   : false,
    showOnHover: true,
    hideOnLeave: true,
    hide       : true,
  };
  static propTypes    = {
    children   : PropTypes.node.isRequired,
    showOnHover: PropTypes.bool,
    hideOnLeave: PropTypes.bool,
    hide       : PropTypes.bool,
    toggleName : PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]),
    iconName   : PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]),
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      hide: this.props.hide,
    }
  }

  // DropDown should be hideable from the outside e.g. on route change
  componentWillReceiveProps (nextProps) {
    if (this.state.hide !== nextProps.hide) {
      this.setState(
        {
          hide: nextProps.hide,
        }
      );
    }
  }

  _onMouseEnter = () => {
    if (this.props.showOnHover) {
      this.setState(
        {
          hide: false,
        }
      );
    }
  };
  _onMouseLeave = () => {
    if (this.props.hideOnLeave) {
      this.setState(
        {
          hide: true,
        }
      );
    }
  };
  _onClick      = () => {
    this.setState(
      {
        hide: !this.state.hide,
      }
    );
  };

  render () {
    const { toggleName, iconName, children, ...others } = this.props;
    delete others.showOnHover;
    delete others.hideOnLeave;
    delete others.hide;
    return (
      <div onMouseLeave={this._onMouseLeave} {...others}>
        <Link onClick={this._onClick} onMouseEnter={this._onMouseEnter} iconName={iconName}>{toggleName}</Link>
        {!this.state.hide && children}
      </div>
    );
  }
}

export default DropDown;
