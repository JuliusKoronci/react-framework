import React from 'react';
import NotAuthenticated from '../NotAuthenticated';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

const middlewares = [];
const mockStore = configureStore(middlewares);

// Initialize mockstore with empty state
const initialState = {};
const store = mockStore(initialState);

const wrapper = shallow(<NotAuthenticated store={store} />);
describe('(Component) NotAuthenticated', () => {
	it('Should match snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

