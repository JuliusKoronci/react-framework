// @flow
import React, { PropTypes, Component } from 'react';
import { Image, TextElement } from '../../';

class Logo extends Component {
  static displayName = 'Logo';

  static defaultProps = {
    textToLeft: false,
    showText  : false,
  };

  static propTypes = {
    image     : PropTypes.string.isRequired,
    text      : PropTypes.string.isRequired,
    textToLeft: PropTypes.bool,
    showText  : PropTypes.bool,
  };

  render () {
    const { image, text, textToLeft, showText, ...others } = this.props;
    return (
      <span {...others}>
        {showText && textToLeft && <TextElement type="span">{text}</TextElement>}
        <Image imageSource={image} altText={text} />
        {showText && !textToLeft && <TextElement type="span">{text}</TextElement>}
        {!showText && <TextElement style={{display:'none'}} type="span">{text}</TextElement>}
      </span>
    );
  }
}

export default Logo;
