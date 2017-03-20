import React from 'react'
import { Route, IndexRoute } from 'react-router';
import Layout from './pages/Layout';
import SecuredLayout from './pages/SecuredLayout';
import HomePage from './pages/public/HomePage';
import ContextProvider from './framework/ContextProvider';
import Firewall from './modules/Security/Firewall';

export default (
	<Route component={ContextProvider}>
		<Route path="/" component={Layout}>
			<IndexRoute component={HomePage} />
			<Route path="/app" component={Firewall}>
				<IndexRoute component={HomePage} />
			</Route>
		</Route>
	</Route>
);
