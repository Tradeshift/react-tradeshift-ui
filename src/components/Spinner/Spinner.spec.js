import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from '.';

configure({ adapter: new Adapter() });

describe('Spinner', () => {
	it('updates on prop change', () => {
		const wrapper = shallow(<Spinner show message="loading" blocking />);
		const spirit = {
			done: jest.fn()
		};
		window.ts = {
			ui: {
				get: (ref, cb) => {
					cb(spirit);
				}
			}
		};
		wrapper.setProps({ show: false });
		expect(spirit.done).toHaveBeenCalled();
	});
});
