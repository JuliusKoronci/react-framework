// @flow
import React from 'react';
import toastr from 'toastr';
import Login from '../../modules/Login/containers/Login';
import { Link } from 'react-router';

const HomePage = () => (
	<div>
		Should just lay out components;
		<Login />

		<Link to="/app">Secure area</Link>
	</div>
);

HomePage.displayName = 'HomePage';

export default HomePage;
