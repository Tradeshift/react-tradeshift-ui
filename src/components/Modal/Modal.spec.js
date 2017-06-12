import React from 'react';
import { shallow } from 'enzyme';

import Modal from './';

describe('Modal', () => {
	// Add specific tests for ui-spirit related functions
	describe('spirit interaction', () => {
		it('respects isOpen in controlled mode', () => {
			const wrapper = shallow(<Modal isOpen />);

			// Mock the spirit:
			const spirit = {
				buttons: () => {}
			};

			// Mock spirit buttons method
			global.confirm = () => true;

			window.ts = {
				ui: {
					get: (ref, cb) => {
						cb(spirit);
					}
				}
			};

			wrapper.instance().onRef({});
			expect(spirit.onclose()).toEqual(false);

			// Set callback to close the aside
			wrapper.setProps({
				onClose() {
					wrapper.setProps({ isOpen: false });
				}
			});
			expect(spirit.onclose()).toEqual(true);
		});
	});
});
