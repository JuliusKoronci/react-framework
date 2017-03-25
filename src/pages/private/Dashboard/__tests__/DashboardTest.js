import React from 'react';
import { getLabelMessage } from 'gef-ui-localization';
import Dashboard from '../Dashboard';
import { shallow } from 'enzyme';

const wrapper = shallow(<Dashboard />);

describe('Dashboard', () => {
	it('should exist', () => {
		expect(Dashboard).toBeDefined();
	});
	it('renders without issues', () => {
		expect(wrapper.length).toBe(1);
	});
	
	// Test if child component is present
	//it('should render one ChildComponent component', () => {
	//	expect(wrapper.find(ChildComponent).length).toBe(1);
	//});
});

