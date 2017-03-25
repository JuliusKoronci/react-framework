import Raven from 'raven-js';

export function logException(ex, context, type) {
	Raven.captureException(ex, {
		extra: context
	});
	/*eslint no-console:0*/
	process.env.NODE_ENV !== 'production'
	&& window
	&& window.console
	&& console[type]
	&& console[type](ex, context);
}


export const types = {
	error: 'error',
	info: 'info',
	warning: 'warning',
};
