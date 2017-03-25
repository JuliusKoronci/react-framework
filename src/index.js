import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import Raven from 'raven-js';
import framework from './framework';

process.env.NODE_ENV === 'production' &&
Raven.config(`https://${framework.sentry.sentry_key}@app.getsentry.com/${framework.sentry.sentry_app}`).install();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
	<Root store={store} history={history} />,
	document.getElementById('root')
);
