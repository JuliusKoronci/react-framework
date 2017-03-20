// @flow
import React, { PropTypes } from 'react';

const Icon = ({ className, children }: { className: string, children: any }) => (
	<i className={`fa fa-${className}`}>{children}</i>
);

Icon.displayName = 'Icon';
Icon.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.node
};
Icon.defaultProps = {};

export default Icon;
