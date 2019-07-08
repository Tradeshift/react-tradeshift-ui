import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StatusBar from '.';

configure({ adapter: new Adapter() });

describe('StatusBar', () => {
	let wrapper;
	let component;
	// Add specific tests for ui-spirit related functions
	describe('lifecycle', () => {
		beforeEach(() => {
			wrapper = mount(<StatusBar message="Foo" />);
			component = wrapper.instance();
		});

		it('updates on prop change', () => {
			StatusBar.prototype.update = jest.fn(StatusBar.prototype.update);
			wrapper.setProps({
				visible: true,
				linkable: true,
				message: 'Bar',
				buttons: []
			});
			expect(component.update).toHaveBeenCalledWith(true, true, 'Bar', []);
		});

		it('hides if visible prop is false', () => {
			expect(component.bar).toBeDefined();
			wrapper.setProps({
				visible: false
			});
			expect(component.bar.hide).toHaveBeenCalled();
		});

		it('hides on unmount', () => {
			expect(component.bar).toBeDefined();
			wrapper.unmount();
			expect(component.bar.hide).toHaveBeenCalled();
		});
	});
});
