import React, { PropTypes } from 'react';
import Navbar from '../modules/App/components/Navbar';
import GlobalStyles from './assets/app.css';

const Layout = ({ children }) => (
	<div id="pageContent" className={GlobalStyles.pageContent}>
		<Navbar />
		<section className={GlobalStyles.flexDisplay}>
			{children}
		</section>
	</div>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
