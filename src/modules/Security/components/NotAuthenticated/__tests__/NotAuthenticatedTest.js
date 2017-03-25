import React from 'react';
import { getLabelMessage } from 'gef-ui-localization';
import NotAuthenticated from '../NotAuthenticated';
import { shallow } from 'enzyme';

const wrapper = shallow(<NotAuthenticated />);

describe('NotAuthenticated', () => {
	it('should exist', () => {
		expect(NotAuthenticated).toBeDefined();
	});
	it('renders without issues', () => {
		expect(wrapper.length).toBe(1);
	});
	
	// Test if child component is present
	//it('should render one ChildComponent component', () => {
	//	expect(wrapper.find(ChildComponent).length).toBe(1);
	//});
});

