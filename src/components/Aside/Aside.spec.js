import React from 'react';
import { shallow } from 'enzyme';

import Aside from './';

describe('Aside', () => {
	// Add specific tests for ui-spirit related functions
	describe('spirit interaction', () => {
		it('respects isOpen in controlled mode', () => {
			const wrapper = shallow(<Aside isOpen />);

			// Mock the spirit:
			const spirit = {};
			window.ts = {
				ui: {
					get: (ref, cb) => cb(spirit)
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
