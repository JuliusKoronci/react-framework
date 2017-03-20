// @flow
import React, { PropTypes, Component } from 'react';

class Input extends Component {

  static displayName = 'Input';

  static defaultProps = {
    value   : 'no value defined',
    type    : 'text',
    onChange: () => {
      // read only input
    },
  };

  static propTypes = {
    value: PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.number
      ]
    ),
    type : PropTypes.string.isRequired,
  };

  componentDidMount () {
    let tries = 4;
    this.int  = setInterval(() => {
      tries--;
      if (tries === 0) {
        this._createChangeEvent();
        clearInterval(this.int);
      }
    }, 300);
  }

  _createChangeEvent = () => {
    if ("createEvent" in document) {
      const evt = document.createEvent("HTMLEvents");
      evt.initEvent("change", false, true);
      this.input.dispatchEvent(evt);
    } else {
      this.input.fireEvent("onchange");
    }
  };

  render () {
    const { ...others } = this.props;
    return (
      <input
        ref={(ref) => this.input = ref}
        {...others} />
    );
  }
}

export default Input;
