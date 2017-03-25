import { logException, types as exceptionTypes } from './Sentry';
import cookie from 'react-cookie';

const providerMapping = {
	'sessionStorage': {
		save: 'setItem',
		remove: 'removeItem',
		load: 'getItem',
	},
	'localStorage': {
		save: 'setItem',
		remove: 'removeItem',
		load: 'getItem',
	},
	'cookies': {
		save: 'save',
		remove: 'remove',
		load: 'load',
	}
};

export const types = {
	'session': 'sessionStorage',
	'local': 'localStorage',
	'cookie': 'cookies',
};

export class Storage {
	constructor(type) {
		this.storage = this._getStorageProvider(type);
		this.type = type;
	}

	save = (key, value) => {
		this.storage[providerMapping[this.type].save](key, JSON.stringify(value));
	};
	remove = (key) => {
		this.storage[providerMapping[this.type].remove](key);
	};
	load = (key) => {
		return JSON.parse(this.storage[providerMapping[this.type].load](key));
	};

	_getStorageProvider = (type) => {
		switch (type) {
			case 'sessionStorage':
				return sessionStorage;
				break;
			case 'localStorage':
				return localStorage;
				break;
			case 'cookies':
				logException(`${type} is not recommended for Auth token`, 'Storage', exceptionTypes.info);
				return cookie;
				break;
			default:
				logException(`${type} is not supported`, 'Storage', exceptionTypes.error);
				break;
		}
	};
}

export default Storage;
