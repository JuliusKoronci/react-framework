// @flow
import React, { PropTypes } from 'react';

const Image = ({ imageSource, altText, ...others }) => (
  <img src={imageSource} alt={altText} {...others} />
);

Image.displayName  = 'Image';
Image.defaultProps = {
  type: 'span',
};
Image.propTypes    = {
  imageSource: PropTypes.string.isRequired,
  altText    : PropTypes.string.isRequired,
};

export default Image;
