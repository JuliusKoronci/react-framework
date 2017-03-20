// @flow
import React, { PropTypes } from 'react';

const Renderer = (type, elem, others) => {
  switch (type) {
    case 'span':
      return (<span {...others}>{elem}</span>);
    case 'p':
      return (<p {...others}>{elem}</p>);
    case 'small':
      return (<small {...others}>{elem}</small>);
    case 'strong':
      return (<strong {...others}>{elem}</strong>);
    default:
      return (<div {...others}>{elem}</div>);
  }
};

const TextElement = ({ children, type, ...others }: { children: any }) => Renderer(type, children, others);

TextElement.displayName  = 'TextElement';
TextElement.defaultProps = {
  type: 'span',
};
TextElement.propTypes    = {
  children: PropTypes.node.isRequired,
  type    : PropTypes.string
};

export default TextElement;
